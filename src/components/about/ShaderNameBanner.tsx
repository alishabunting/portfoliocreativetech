import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import type { WebGLProgramWithInfo, WebGLContextWithExtensions } from '../../types/shader-types';

const BannerContainer = styled.div`
  width: 100vw;
  aspect-ratio: 32/9;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  margin-top: -80px;
  position: relative;
  background: var(--color-background);
  overflow: hidden;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
  width: 100%;
  pointer-events: none;
`;

const MainTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 700;
  color: white;
  margin: 0;
  padding: 0;
  letter-spacing: 0.05em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  mix-blend-mode: difference;
`;

const SubTitle = styled.div`
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: rgba(255, 255, 255, 0.8);
  margin-top: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  mix-blend-mode: difference;
`;

const vertexShader = `
  attribute vec2 position;
  attribute vec2 offset;
  attribute float speed;
  
  uniform float time;
  uniform vec2 resolution;
  
  varying vec2 vUv;
  varying float vSpeed;
  
  void main() {
    vUv = position * 0.5 + 0.5;
    vSpeed = speed;
    
    // Create flowing motion
    vec2 pos = position;
    float t = time * speed;
    pos.x += sin(t * 0.5 + offset.x * 6.28) * 0.1;
    pos.y += cos(t * 0.7 + offset.y * 6.28) * 0.1;
    
    gl_Position = vec4(pos, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  
  uniform float time;
  uniform vec2 resolution;
  
  varying vec2 vUv;
  varying float vSpeed;
  
  vec3 colorA = vec3(0.165, 0.031, 0.271);  // #2a0845
  vec3 colorB = vec3(0.392, 0.255, 0.647);  // #6441A5
  vec3 colorC = vec3(0.514, 0.365, 0.827);  // #835DD4
  
  // Improved noise function
  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }
  
  void main() {
    // Dynamic UV coordinates
    vec2 uv = gl_FragCoord.xy / resolution;
    float t = time * 0.2;
    
    // Create complex fluid motion
    float n1 = sin(uv.x * 3.0 + t) * cos(uv.y * 2.0 - t);
    float n2 = sin((uv.x + uv.y) * 5.0 + t);
    float n3 = sin(uv.x * 5.0 - t) * cos(uv.y * 7.0 + t);
    
    // Combine noise patterns
    float noise = (n1 + n2 + n3) / 3.0;
    noise = noise * 0.5 + 0.5;
    
    // Dynamic color mixing
    vec3 color;
    if (noise < 0.33) {
      color = mix(colorA, colorB, noise * 3.0);
    } else if (noise < 0.66) {
      color = mix(colorB, colorC, (noise - 0.33) * 3.0);
    } else {
      color = mix(colorC, colorA, (noise - 0.66) * 3.0);
    }
    
    // Add brightness variation
    float brightness = 0.8 + 0.2 * sin(noise * 6.28 + time);
    color *= brightness;
    
    // Add subtle vignette
    float vignette = 1.0 - length(vUv - 0.5) * 0.5;
    color *= vignette;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

const ShaderNameBanner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const programRef = useRef<WebGLProgramWithInfo>();
  const contextRef = useRef<WebGLContextWithExtensions>();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let gl: WebGLContextWithExtensions | null = null;
    let timeLocation: WebGLUniformLocation | null = null;
    let resolutionLocation: WebGLUniformLocation | null = null;
    let numParticles = 4;

    try {
      const context = canvas.getContext('webgl', {
        alpha: true,
        antialias: true,
        premultipliedAlpha: false,
        powerPreference: 'high-performance',
        precision: 'highp',
      });
      
      if (!context) {
        setHasError(true);
        return;
      }

      gl = context as WebGLContextWithExtensions;
      contextRef.current = gl;

      // Create shader program
      const program = gl.createProgram();
      if (!program) {
        setHasError(true);
        return;
      }

      programRef.current = program as WebGLProgramWithInfo;

      // Compile shaders
      const vs = gl.createShader(gl.VERTEX_SHADER);
      const fs = gl.createShader(gl.FRAGMENT_SHADER);
      if (!vs || !fs) {
        setHasError(true);
        return;
      }

      gl.shaderSource(vs, vertexShader);
      gl.shaderSource(fs, fragmentShader);
      gl.compileShader(vs);
      gl.compileShader(fs);

      // Check for shader compilation errors
      if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
        console.error('Vertex shader compilation error:', gl.getShaderInfoLog(vs));
        setHasError(true);
        return;
      }
      if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
        console.error('Fragment shader compilation error:', gl.getShaderInfoLog(fs));
        setHasError(true);
        return;
      }

      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);

      // Check for program linking errors
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program linking error:', gl.getProgramInfoLog(program));
        setHasError(true);
        return;
      }

      gl.useProgram(program);

      // Create geometry and attributes
      const vertices = new Float32Array(numParticles * 8);
      const offsets = new Float32Array(numParticles * 8);
      const speeds = new Float32Array(numParticles * 4);

      // Generate particle attributes
      for (let i = 0; i < numParticles; i++) {
        const idx = i * 8;
        // Position (2 triangles per particle)
        vertices[idx] = -1; vertices[idx + 1] = -1;
        vertices[idx + 2] = 1;  vertices[idx + 3] = -1;
        vertices[idx + 4] = -1; vertices[idx + 5] = 1;
        vertices[idx + 6] = 1;  vertices[idx + 7] = 1;

        // Random offsets
        for (let j = 0; j < 8; j++) {
          offsets[idx + j] = Math.random();
        }

        // Random speeds
        for (let j = 0; j < 4; j++) {
          speeds[i * 4 + j] = 0.5 + Math.random() * 0.5;
        }
      }

      // Set up buffers
      const positionBuffer = gl.createBuffer();
      const offsetBuffer = gl.createBuffer();
      const speedBuffer = gl.createBuffer();

      if (!positionBuffer || !offsetBuffer || !speedBuffer) {
        setHasError(true);
        return;
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
      const positionLocation = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, offsetBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, offsets, gl.STATIC_DRAW);
      const offsetLocation = gl.getAttribLocation(program, 'offset');
      gl.enableVertexAttribArray(offsetLocation);
      gl.vertexAttribPointer(offsetLocation, 2, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, speedBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, speeds, gl.STATIC_DRAW);
      const speedLocation = gl.getAttribLocation(program, 'speed');
      gl.enableVertexAttribArray(speedLocation);
      gl.vertexAttribPointer(speedLocation, 1, gl.FLOAT, false, 0, 0);

      timeLocation = gl.getUniformLocation(program, 'time');
      resolutionLocation = gl.getUniformLocation(program, 'resolution');

      const resize = () => {
        if (!canvas || !gl) return;
        
        const pixelRatio = window.devicePixelRatio || 1;
        const width = canvas.clientWidth * pixelRatio;
        const height = canvas.clientHeight * pixelRatio;
        
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
          gl.viewport(0, 0, width, height);
          
          if (resolutionLocation) {
            gl.uniform2f(resolutionLocation, width, height);
          }
        }
      };

      // Initial resize
      resize();
      window.addEventListener('resize', resize);

      // Enable blending
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      // Animation loop
      let startTime = performance.now();
      const animate = () => {
        if (!gl || !timeLocation) return;
        
        const currentTime = performance.now();
        const time = (currentTime - startTime) * 0.001; // Convert to seconds
        
        gl.uniform1f(timeLocation, time);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, numParticles * 4);
        
        animationRef.current = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener('resize', resize);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        if (gl) {
          gl.deleteProgram(program);
          gl.deleteShader(vs);
          gl.deleteShader(fs);
          gl.deleteBuffer(positionBuffer);
          gl.deleteBuffer(offsetBuffer);
          gl.deleteBuffer(speedBuffer);
        }
      };
    } catch (error) {
      console.error('Error in ShaderNameBanner:', error);
      setHasError(true);
    }
  }, []);

  if (hasError) {
    return (
      <BannerContainer style={{ background: 'linear-gradient(45deg, #2a0845 0%, #6441A5 100%)' }}>
        <TextOverlay>
          <MainTitle>Alisha Tené Bunting</MainTitle>
        </TextOverlay>
      </BannerContainer>
    );
  }

  return (
    <BannerContainer>
      <Canvas ref={canvasRef} />
      <TextOverlay>
        <MainTitle>Alisha Tené Bunting</MainTitle>
      </TextOverlay>
    </BannerContainer>
  );
};

export default ShaderNameBanner; 