@xingrz/decompress-tarzst [![test](https://github.com/xingrz/decompress-tarzst/actions/workflows/test.yml/badge.svg)](https://github.com/xingrz/decompress-tarzst/actions/workflows/test.yml)
==========

[![][npm-version]][npm-url] [![][npm-downloads]][npm-url] [![license][license-img]][license-url] [![issues][issues-img]][issues-url] [![stars][stars-img]][stars-url] [![commits][commits-img]][commits-url]

[@xingrz/decompress](https://github.com/xingrz/decompress) .tar.zst plugin.

## Install

```sh
npm install --save @xingrz/decompress-tarzst
```

## Usage

```ts
import decompress from '@xingrz/decompress';
import decompressTarzst from '@xingrz/decompress-tarzst';

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

### `decompressTarzst(): (input: Buffer | Readable) => Promise<File[]>`

Returns a `Promise<File[]>`.

#### input

Type: `Buffer` or [`stream.Readable`](https://nodejs.org/dist/latest-v16.x/docs/api/stream.html#class-streamreadable)

Buffer or stream to decompress.

## License

[MIT License](LICENSE)

[npm-version]: https://img.shields.io/npm/v/@xingrz/decompress-tarzst.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/@xingrz/decompress-tarzst.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@xingrz/decompress-tarzst
[license-img]: https://img.shields.io/github/license/xingrz/decompress-tarzst?style=flat-square
[license-url]: LICENSE
[issues-img]: https://img.shields.io/github/issues/xingrz/decompress-tarzst?style=flat-square
[issues-url]: https://github.com/xingrz/decompress-tarzst/issues
[stars-img]: https://img.shields.io/github/stars/xingrz/decompress-tarzst?style=flat-square
[stars-url]: https://github.com/xingrz/decompress-tarzst/stargazers
[commits-img]: https://img.shields.io/github/last-commit/xingrz/decompress-tarzst?style=flat-square
[commits-url]: https://github.com/xingrz/decompress-tarzst/commits/master
