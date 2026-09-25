type Point = { x: number; y: number };
export type ChipItem = { label: string; x: number; y: number; delay: number };

export function buildChips(labels: readonly string[], positions: readonly Point[], start: number, stagger: number): ChipItem[] {
  return labels.map(function toChip(label, i) {
    return { label, x: positions[i].x, y: positions[i].y, delay: start + i * stagger };
  });
}
