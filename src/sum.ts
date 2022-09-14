import { Big } from 'big.js';

export function sum(list: number[]) {
  let result = new Big(0);
  list.forEach((item) => {
    result = result.plus(item);
  });
  return result.toNumber();
}
