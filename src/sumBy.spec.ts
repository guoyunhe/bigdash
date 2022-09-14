import { sumBy } from '.';

describe('sumBy()', () => {
  it('sumBy decimal numbers with string path', () => {
    expect(sumBy([{ foo: 0.1 }, { foo: 0.2 }], 'foo')).toBe(0.3);
  });
});
