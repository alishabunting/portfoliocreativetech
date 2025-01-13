declare module 'vanta/dist/vanta.halo.min' {
  interface VantaHaloOptions {
    el: HTMLElement;
    THREE: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    baseColor?: number;
    backgroundColor?: number;
    amplitudeFactor?: number;
    xOffset?: number;
    yOffset?: number;
    size?: number;
  }

  function HALO(options: VantaHaloOptions): {
    destroy: () => void;
  };

  export default HALO;
} 