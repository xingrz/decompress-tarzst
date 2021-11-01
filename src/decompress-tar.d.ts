declare module 'decompress-tar' {
  import { Readable } from 'stream';
  import { File } from 'decompress';
  export default function decompressTar(): (input: Buffer | Readable) => Promise<File[]>;
}
