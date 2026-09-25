import { interpolate, useCurrentFrame } from 'remotion';
import { EASE_APPLE, EXIT } from '../config/motion';

export function useExit(duration: number) {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [duration - EXIT.frames, duration], [0, 1], {
    easing: EASE_APPLE, extrapolateLeft: 'clamp', extrapolateRight: 'clamp',
  });

  return { opacity: 1 - p, filter: `blur(${p * EXIT.blur}px)`, transform: `scale(${1 - p * EXIT.scale})` };
}