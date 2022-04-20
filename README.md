# downloadme

## Intro

It is a tiny library to download media.  
Here is the [Demo](https://downloadme.vercel.app/).

## Installation

```shell
npm i downloadme -D
```

or 

```shell
pnpm add downloadme -D
```

## Useage

```javascript
import { download } from 'downloadmejs'

// blob is a variable for a video
download(blob, {name: 'test.mp4'});
```
