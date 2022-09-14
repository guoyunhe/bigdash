import { Big } from 'big.js';

export function subtract(minuend: number, subtrahend: number) {
  let result = new Big(minuend);
  result = result.minus(subtrahend);
  return result.toNumber();
}
