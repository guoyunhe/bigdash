import { Big } from 'big.js';
import { map, property } from 'lodash-es';

export function sumBy<T>(
  collection: ArrayLike<T> | null | undefined,
  iteratee?: string | ((value: T) => number) | undefined
): number {
  let result = new Big(0);
  map(collection, (item) => {
    let value;
    if (typeof iteratee === 'string') {
      value = property(iteratee)(item);
    } else if (typeof iteratee === 'function') {
      value = iteratee(item);
    }
    if (typeof value === 'number') {
      result = result.plus(value);
    }
  });
  return result.toNumber();
}
