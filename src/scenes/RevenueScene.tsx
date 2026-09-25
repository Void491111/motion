import { AbsoluteFill } from 'remotion';
import { BlurText } from '../components/blurText';
import { Badge } from '../components/Badge';
import { useRevenueValue } from '../hooks/useRevenueValue';
import { useExit } from '../hooks/useExit';
import { formatRupiah } from '../utils/formatRupiah';
import { REVENUE_TIMING as T } from '../config/revenue';
import { COPY } from '../config/copy';
import { COLORS, TYPE } from '../config/theme';

export function RevenueScene({ duration }: { duration: number }) {
  const value = useRevenueValue();
  const exit = useExit(duration);

  return (
    <AbsoluteFill style={{ ...exit, justifyContent: 'center', alignItems: 'center', gap: 40, color: COLORS.white }}>
      <BlurText text={COPY.revenue} delay={T.labelIn} style={{ fontSize: TYPE.title, fontWeight: 500, opacity: 0.8 }} />
      <div style={{ fontSize: TYPE.hero, fontWeight: 800, letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums' }}>
        {formatRupiah(value)}
      </div>
      <Badge label={COPY.taxBadge} delay={T.badgeIn} />
    </AbsoluteFill>
  );
}