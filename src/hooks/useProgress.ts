import { interpolate, useCurrentFrame } from 'remotion';
import { EASE_APPLE } from '../config/motion';

export function useProgress(start: number, end: number, from: number, to: number) {
  const frame = useCurrentFrame();
  return interpolate(frame, [start, end], [from, to], {
    easing: EASE_APPLE, extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
}
