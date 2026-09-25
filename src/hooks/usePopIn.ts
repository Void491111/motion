import { spring, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { POP_IN, SPRING_SMOOTH } from '../config/motion';

export function usePopIn(delay: number) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: SPRING_SMOOTH });

  return { opacity: p, transform: `scale(${interpolate(p, [0, 1], [POP_IN.fromScale, 1])})` };
}