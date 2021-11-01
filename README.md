# decompress-tarzst  [![test](https://github.com/xingrz/decompress-tarzst/actions/workflows/test.yml/badge.svg)](https://github.com/xingrz/decompress-tarzst/actions/workflows/test.yml)

> tar.zst decompress plugin


## Install

```
$ npm install @xingrz/decompress-tarzst
```


## Usage

```js
const decompress = require('decompress');
const decompressTarzst = require('@xingrz/decompress-tarzst');

(async () => {
	await decompress('unicorn.tar.zst', 'dist', {
		plugins: [
			decompressTarzst()
		]
	});

	console.log('Files decompressed');
})();
```


## API

### decompressTarzst()(input)

Returns both a `Promise<Buffer>` and a [Duplex stream](https://nodejs.org/api/stream.html#stream_class_stream_duplex).

#### input

Type: `Buffer`

Buffer to decompress.
