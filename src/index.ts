import { File } from 'decompress';
import * as fileType from 'file-type';
import * as fzstd from 'fzstd';
import decompressTar from 'decompress-tar';

export default () => async (input: Buffer): Promise<File[]> => {
  if (!Buffer.isBuffer(input)) {
    throw new TypeError(`Expected a Buffer, got ${typeof input}`);
  }

  const type = await fileType.fromBuffer(input);
  if (!type || type.ext !== 'zst') {
    return [];
  }

  const archive = Buffer.from(fzstd.decompress(input));
  return decompressTar()(archive);
};