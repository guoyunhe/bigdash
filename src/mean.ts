import { Big } from 'big.js';
import { sum } from './sum';

export function mean(list: number[]) {
  let result = new Big(sum(list));
  result = result.div(list.length);
  return result.toNumber();
}
