import { AbsoluteFill } from 'remotion';
import { Chip } from './Chip';
import { CHIP_POSITIONS, CUT_TIMING as T } from '../config/cut';
import { COPY } from '../config/copy';

export function ChipRing() {
  return (
    <AbsoluteFill>
      {COPY.chips.map(function renderChip(label, i) {
        const pos = CHIP_POSITIONS[i];
        return <Chip key={label} label={label} x={pos.x} y={pos.y} delay={T.chipsIn + i * T.chipStagger} />;
      })}
    </AbsoluteFill>
  );
}