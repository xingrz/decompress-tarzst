declare module '@fstnetwork/cppzst' {
  import { Transform } from 'stream';

  interface ZstdCompressParams {
    level?: number;
    dict?: Buffer;
    dictSize?: number;
  }

  interface ZdtdDecompressParams {
    dict?: Buffer;
    dictSize?: number;
  }

  export function compress(buffer: Buffer, params?: ZstdCompressParams): Promise<Buffer>;
  export function decompress(buffer: Buffer, params?: ZdtdDecompressParams): Promise<Buffer>;

  export function compressSync(buffer: Buffer, params?: ZstdCompressParams): Buffer;
  export function decompressSync(buffer: Buffer, params?: ZdtdDecompressParams): Buffer;

  export function compressStream(params?: ZstdCompressParams): Transform;
  export function decompressStream(params?: ZdtdDecompressParams): Transform;
}
