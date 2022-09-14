import { Big } from 'big.js';

export function divide(dividend: number, divisor: number) {
  let result = new Big(dividend);
  result = result.div(divisor);
  return result.toNumber();
}
