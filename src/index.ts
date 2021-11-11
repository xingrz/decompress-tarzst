import type { DecompressPlugin } from '@xingrz/decompress-types';
import * as fileType from 'file-type';
import * as cppzst from '@xingrz/cppzst';
import decompressTar from '@xingrz/decompress-tar';
import isStream from 'is-stream';

export default (): DecompressPlugin<void> => async (input) => {
  const isBuffer = Buffer.isBuffer(input);
  const type = isBuffer ? await fileType.fromBuffer(input) : null;

  if (!isBuffer && !isStream(input)) {
    throw new TypeError(`Expected a Buffer or Stream, got ${typeof input}`);
  }

  if (isBuffer && (!type || type.ext !== 'zst')) {
    return [];
  }

  const decompressor = cppzst.decompressStream();
  const result = decompressTar()(decompressor);

  if (isBuffer) {
    decompressor.end(input);
  } else {
    input.pipe(decompressor);
  }

  return result;
};
