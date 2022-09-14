import { sum } from '.';

describe('sum()', () => {
  it('sum decimal numbers', () => {
    expect(sum([0.1, 0.2])).toBe(0.3);
  });
});
