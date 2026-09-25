import { usePopIn } from '../hooks/usePopIn';
import { COLORS, TYPE } from '../config/theme';

type Props = { label: string; delay: number };

export function Badge({ label, delay }: Props) {
  const motion = usePopIn(delay);
  return (
    <div style={{ ...motion, background: COLORS.accent, color: COLORS.black, fontSize: TYPE.badge,
      fontWeight: 800, padding: '12px 32px', borderRadius: 999 }}>
      {label}
    </div>
  );
}