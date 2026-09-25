import { COLORS } from '../config/theme';

export function StoreIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={COLORS.white} strokeWidth={4} strokeLinejoin="round">
      <path d="M14 38 L22 16 H78 L86 38 Z" fill={COLORS.accent} stroke={COLORS.accent} />
      <path d="M20 38 V84 H80 V38" />
      <path d="M42 84 V60 H58 V84" />
    </svg>
  );
}