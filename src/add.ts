import { Big } from 'big.js';

export function add(augend: number, addend: number) {
  let result = new Big(augend);
  result = result.plus(addend);
  return result.toNumber();
}
