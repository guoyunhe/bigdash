import { Big } from 'big.js';

export function multiply(multiplier: number, multiplicand: number) {
  let result = new Big(multiplier);
  result = result.times(multiplicand);
  return result.toNumber();
}
