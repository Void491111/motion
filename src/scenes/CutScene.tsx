import { AbsoluteFill } from 'remotion';
import { BlurText } from '../components/BlurText';
import { StoreIcon } from '../components/StoreIcon';
import { ChipRing } from '../components/ChipRing';
import { usePopIn } from '../hooks/usePopIn';
import { useShrink } from '../hooks/useShrink';
import { useExit } from '../hooks/useExit';
import { buildChips } from '../utils/buildChips';
import { CHIP_POSITIONS, CUT_LAYOUT as L, CUT_TIMING as T } from '../config/cut';
import { COPY } from '../config/copy';
import { COLORS, TYPE } from '../config/theme';

const CHIPS = buildChips(COPY.chips, CHIP_POSITIONS, T.chipsIn, T.chipStagger);

export function CutScene({ duration }: { duration: number }) {
  const exit = useExit(duration);
  const storeIn = usePopIn(T.storeIn);
  const shrink = useShrink(T.shrinkFrom, T.shrinkTo, L.storeShrinkTo);

  return (
    <AbsoluteFill style={{ ...exit, color: COLORS.white }}>
      <AbsoluteFill style={{ alignItems: 'center', paddingTop: 260 }}>
        <BlurText text={COPY.cut} delay={T.titleIn} style={{ fontSize: TYPE.title, fontWeight: 800, letterSpacing: '-0.03em' }} />
      </AbsoluteFill>
      <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div style={storeIn}>
          <div style={shrink}><StoreIcon size={L.storeSize} /></div>
        </div>
      </AbsoluteFill>
      <ChipRing items={CHIPS} />
    </AbsoluteFill>
  );
}
