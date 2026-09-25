import { spring, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { BLUR_IN, FLY_IN, SPRING_SMOOTH } from '../config/motion';

export function useFlyIn(delay: number, x: number, y: number) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: SPRING_SMOOTH });
  const k = interpolate(p, [0, 1], [FLY_IN.distance, 1]);

  return {
    opacity: p,
    filter: `blur(${interpolate(p, [0, 1], [BLUR_IN.fromBlur, 0])}px)`,
    transform: `translate(-50%, -50%) translate(${x * k}px, ${y * k}px)`,
  };
}
