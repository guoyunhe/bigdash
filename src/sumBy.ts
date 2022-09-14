import { Big } from 'big.js';
import { getProp } from './getProp';

export function sumBy<T>(
  list: Array<T>,
  iteratee?: string | string[] | ((value: T) => number) | undefined
): number {
  let result = new Big(0);
  list.forEach((item) => {
    let value;
    if (typeof iteratee === 'string' || Array.isArray(iteratee)) {
      value = getProp(item, iteratee);
    } else if (typeof iteratee === 'function') {
      value = iteratee(item);
    }
    if (typeof value === 'number') {
      result = result.plus(value);
    }
  });
  return result.toNumber();
}
