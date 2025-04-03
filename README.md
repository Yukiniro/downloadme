# downloadme

## Warning

Starting from version 2.x, the project will use the ESM module format and no longer support the CommonJS module format.

## Intro

It is a tiny library to download media.
Here is the [Demo](https://downloadme.vercel.app/).

## Installation

```shell
npm i downloadmejs -D
```

or

```shell
pnpm add downloadmejs -D
```

## Useage

```javascript
import { download } from 'downloadmejs'

// blob is a variable for a video
download(blob, { name: 'test.mp4' })
```
