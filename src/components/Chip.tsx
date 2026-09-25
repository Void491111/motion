import { useFlyIn } from '../hooks/useFlyIn';
import { COLORS, SURFACE, TYPE } from '../config/theme';

type Props = { label: string; delay: number; x: number; y: number };

export function Chip({ label, delay, x, y }: Props) {
  const motion = useFlyIn(delay, x, y);
  return (
    <div style={{ ...motion, position: 'absolute', left: '50%', top: '50%', whiteSpace: 'nowrap',
      background: SURFACE.glass, border: `2px solid ${SURFACE.border}`, color: COLORS.white,
      fontSize: TYPE.chip, fontWeight: 700, padding: '14px 32px', borderRadius: 999 }}>
      {label}
    </div>
  );
}
