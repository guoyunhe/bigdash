import { add } from '.';

describe('add()', () => {
  it('add decimal numbers', () => {
    expect(add(0.1, 0.2)).toBe(0.3);
  });
});
