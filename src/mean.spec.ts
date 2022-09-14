import { mean } from '.';

describe('mean()', () => {
  it('mean decimal numbers', () => {
    expect(mean([0.1, 0.2])).toBe(0.15);
  });
});
