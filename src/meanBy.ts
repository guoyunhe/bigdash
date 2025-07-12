import { Big } from 'big.js';
import { sumBy } from './sumBy';

export function meanBy<T>(
  list: T[],
  iteratee?: string | string[] | ((value: T) => number) | undefined,
): number {
  let result = new Big(sumBy(list, iteratee));
  result = result.div(list.length);
  return result.toNumber();
}
