import { AbsoluteFill } from 'remotion';
import { Chip } from './Chip';
import type { ChipItem } from '../utils/buildChips';

type Props = { items: ChipItem[]; squeeze?: number };

export function ChipRing({ items, squeeze = 1 }: Props) {
  return (
    <AbsoluteFill>
      {items.map(function renderChip(item) {
        return <Chip key={item.label} label={item.label} x={item.x * squeeze} y={item.y * squeeze} delay={item.delay} />;
      })}
    </AbsoluteFill>
  );
}
