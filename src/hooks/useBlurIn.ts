import { spring, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { BLUR_IN, SPRING_SMOOTH } from '../config/motion';

export function useBlurIn(delay: number) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: SPRING_SMOOTH });

  return {
    opacity: p,
    filter: `blur(${interpolate(p, [0, 1], [BLUR_IN.fromBlur, 0])}px)`,
    transform: `translateY(${interpolate(p, [0, 1], [BLUR_IN.fromY, 0])}px)`,
  };
}