import { meanBy } from '.';

describe('meanBy()', () => {
  it('meanBy decimal numbers with dot path', () => {
    expect(meanBy([{ foo: { bar: 0.1 } }, { foo: { bar: 0.2 } }], 'foo.bar')).toBe(0.15);
  });

  it('meanBy decimal numbers with array path', () => {
    expect(meanBy([{ foo: { bar: 0.1 } }, { foo: { bar: 0.2 } }], ['foo', 'bar'])).toBe(0.15);
  });

  it('meanBy decimal numbers with function selector', () => {
    expect(
      meanBy([{ foo: { bar: 0.1 } }, { foo: { bar: 0.2 } }], (item: any) => item.foo.bar),
    ).toBe(0.15);
  });
});
