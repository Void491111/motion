import { useCountUp } from './useCountUp';
import { REVENUE_TIMING as T, REVENUE_VALUES as V } from '../config/revenue';

export function useRevenueValue() {
  const up = useCountUp(0, V.gross, T.countFrom, T.countTo);
  const cut = useCountUp(0, V.gross * V.taxRate, T.dropFrom, T.dropTo);
  return up - cut;
}