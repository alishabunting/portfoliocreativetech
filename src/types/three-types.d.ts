import { Object3DNode } from '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    shaderMaterial: Object3DNode<ShaderMaterial, typeof ShaderMaterial>;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      shaderMaterial: any;
      mesh: any;
      planeGeometry: any;
    }
  }
} 