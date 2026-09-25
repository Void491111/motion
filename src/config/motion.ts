import { Easing } from 'remotion';

export const EASE_APPLE = Easing.bezier(0.25, 0.1, 0.25, 1);
export const SPRING_SMOOTH = { damping: 200 };
export const BLUR_IN = { fromBlur: 24, fromY: 40 };
export const POP_IN = { fromScale: 0.8 };
export const FLY_IN = { distance: 1.8 };
export const EXIT = { frames: 24, blur: 20, scale: 0.04 };
