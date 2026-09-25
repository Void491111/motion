import type { CSSProperties } from 'react';
import { useBlurIn } from '../hooks/useBlurIn';

type Props = { text: string; delay: number; style?: CSSProperties };

export function BlurText({ text, delay, style }: Props) {
  const motion = useBlurIn(delay);
  return <div style={{ ...style, ...motion }}>{text}</div>;
}