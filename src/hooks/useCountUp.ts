import { interpolate, useCurrentFrame } from 'remotion';
import { EASE_APPLE } from '../config/motion';

export function useCountUp(from: number, to: number, start: number, end: number) {
  const frame = useCurrentFrame();
  return interpolate(frame, [start, end], [from, to], {
    easing: EASE_APPLE, extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
}