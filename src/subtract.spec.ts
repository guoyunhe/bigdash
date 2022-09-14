import { subtract } from '.';

describe('subtract()', () => {
  it('subtract decimal numbers', () => {
    expect(subtract(0.3, 0.2)).toBe(0.1);
  });
});
