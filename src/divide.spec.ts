import { divide } from '.';

describe('divide()', () => {
  it('divide decimal numbers', () => {
    expect(divide(0.1, 0.2)).toBe(0.5);
  });
});
