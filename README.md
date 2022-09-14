# Bigdash

Re-implement lodash math functions with big.js.

## Why?

Lodash:

```js
sum([0.1, 0.2]); // 0.30000000000000004
```

Bigdash:

```js
sum([0.1, 0.2]); // 0.3
```

[Learn more...](https://0.30000000000000004.com/)

## Install

```bash
npm install --save bigdash
```

## Usage

### add()

```js
import { add } from 'bigdash';

add(0.1, 0.2); // 0.3
```

### divide()

```js
import { divide } from 'bigdash';

divide(0.1, 0.2); // 0.5
```

### mean()

```js
import { mean } from 'bigdash';

mean([0.1, 0.2]); // 0.15
```

### meanBy()

```js
import { meanBy } from 'bigdash';

meanBy([{ foo: { bar: 0.1 } }, { foo: { bar: 0.2 } }], 'foo.bar'); // 0.15

meanBy([{ foo: { bar: 0.1 } }, { foo: { bar: 0.2 } }], ['foo', 'bar']); // 0.15

meanBy([{ foo: { bar: 0.1 } }, { foo: { bar: 0.2 } }], (item) => item.foo.bar); // 0.15
```

### multiply()

```js
import { multiply } from 'bigdash';

multiply(0.1, 0.2); // 0.02
```

### subtract()

```js
import { subtract } from 'bigdash';

subtract(0.3, 0.2); // 0.1
```

### sum()

```js
import { sum } from 'bigdash';

sum([0.1, 0.2]); // 0.3
```

### sumBy()

```js
import { sumBy } from 'bigdash';

sumBy([{ foo: { bar: 0.1 } }, { foo: { bar: 0.2 } }], 'foo.bar'); // 0.3

sumBy([{ foo: { bar: 0.1 } }, { foo: { bar: 0.2 } }], ['foo', 'bar']); // 0.3

sumBy([{ foo: { bar: 0.1 } }, { foo: { bar: 0.2 } }], (item) => item.foo.bar); // 0.3
```
