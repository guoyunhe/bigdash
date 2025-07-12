import { sumBy } from '.';

describe('sumBy()', () => {
  it('sumBy decimal numbers with dot path', () => {
    expect(sumBy([{ foo: { bar: 0.1 } }, { foo: { bar: 0.2 } }], 'foo.bar')).toBe(0.3);
  });

  it('sumBy decimal numbers with array path', () => {
    expect(sumBy([{ foo: { bar: 0.1 } }, { foo: { bar: 0.2 } }], ['foo', 'bar'])).toBe(0.3);
  });

  it('sumBy decimal numbers with function selector', () => {
    expect(sumBy([{ foo: { bar: 0.1 } }, { foo: { bar: 0.2 } }], (item: any) => item.foo.bar)).toBe(
      0.3,
    );
  });
});
