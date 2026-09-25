import { AbsoluteFill } from 'remotion';
import { BlurText } from '../components/BlurText';
import { StoreIcon } from '../components/StoreIcon';
import { ChipRing } from '../components/ChipRing';
import { useProgress } from '../hooks/useProgress';
import { useExit } from '../hooks/useExit';
import { buildChips } from '../utils/buildChips';
import { CHIP_POSITIONS } from '../config/cut';
import { EXTRA_CHIP_POSITIONS, RENTING_LAYOUT as L, RENTING_TIMING as T } from '../config/renting';
import { COPY } from '../config/copy';
import { COLORS, TYPE } from '../config/theme';

const CHIPS = [
  ...buildChips(COPY.chips, CHIP_POSITIONS, T.chipsIn, T.chipStagger),
  ...buildChips(COPY.extraChips, EXTRA_CHIP_POSITIONS, T.extraIn, T.extraStagger),
];

export function RentingScene({ duration }: { duration: number }) {
  const exit = useExit(duration);
  const storeScale = useProgress(T.squeezeFrom, T.squeezeTo, L.storeFrom, L.storeTo);
  const squeeze = useProgress(T.squeezeFrom, T.squeezeTo, 1, L.squeezeTo);

  return (
    <AbsoluteFill style={{ ...exit, color: COLORS.white }}>
      <AbsoluteFill style={{ alignItems: 'center', paddingTop: 260 }}>
        <BlurText text={COPY.renting} delay={T.titleIn} style={{ fontSize: TYPE.title, fontWeight: 800, letterSpacing: '-0.03em', color: COLORS.accent }} />
      </AbsoluteFill>
      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ transform: `scale(${storeScale})` }}><StoreIcon size={L.storeSize} /></div>
      </AbsoluteFill>
      <ChipRing items={CHIPS} squeeze={squeeze} />
    </AbsoluteFill>
  );
}
