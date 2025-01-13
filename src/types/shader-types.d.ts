import * as THREE from 'three';

declare module 'three' {
  interface ShaderMaterialParameters {
    uniforms?: {
      time: { value: number };
      pointTexture: { value: THREE.Texture | null };
    };
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      shaderMaterial: any;
      bufferAttribute: any;
      points: any;
    }
  }
}

declare module '*.vert' {
  const content: string;
  export default content;
}

declare module '*.frag' {
  const content: string;
  export default content;
}

interface ShaderMaterialUniforms {
  time: { value: number };
  resolution: { value: [number, number] };
}

interface ShaderMaterialAttributes {
  position: { value: Float32Array };
  offset: { value: Float32Array };
  speed: { value: Float32Array };
}

interface WebGLProgramWithInfo extends WebGLProgram {
  uniforms?: ShaderMaterialUniforms;
  attributes?: ShaderMaterialAttributes;
}

interface WebGLContextWithExtensions extends WebGLRenderingContext {
  program?: WebGLProgramWithInfo;
} 