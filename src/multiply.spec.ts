import { multiply } from '.';

describe('multiply()', () => {
  it('multiply decimal numbers', () => {
    expect(multiply(0.1, 0.2)).toBe(0.02);
  });
});
