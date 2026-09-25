import { AbsoluteFill } from 'remotion';
import { COLORS } from '../config/theme';

export function ScenePlaceholder({ label }: { label: string }) {
  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', color: COLORS.accent, fontSize: 80, fontWeight: 800 }}>
      {label}
    </AbsoluteFill>
  );
}