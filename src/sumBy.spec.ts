import { sumBy } from '.';

describe('sumBy()', () => {
  it('sumBy decimal numbers with string path', () => {
    expect(sumBy([{ foo: 0.1 }, { foo: 0.2 }], 'foo')).toBe(0.3);
  });

  it('sumBy decimal numbers with function selector', () => {
    expect(sumBy([{ foo: 0.1 }, { foo: 0.2 }], (item: any) => item.foo)).toBe(
      0.3
    );
  });
});
