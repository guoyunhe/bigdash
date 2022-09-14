# Bigdash

re-implement lodash number functions with big.js

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

### sum()

```js
import { sum } from 'bigdash';

sum([0.1, 0.2]); // 0.3
```
