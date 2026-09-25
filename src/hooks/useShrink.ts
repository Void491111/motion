import { interpolate, useCurrentFrame } from 'remotion';
import { EASE_APPLE } from '../config/motion';

export function useShrink(start: number, end: number, to: number) {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [start, end], [1, to], {
    easing: EASE_APPLE, extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });
  return { transform: `scale(${scale})` };
}