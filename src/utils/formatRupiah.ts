const formatter = new Intl.NumberFormat('id-ID');

export function formatRupiah(value: number) {
  return `Rp ${formatter.format(Math.round(value))}`;
}