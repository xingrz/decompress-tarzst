import { readFile } from 'fs/promises';
import { join } from 'path';
import * as fileType from 'file-type';
import decompressTarzst from '../src';

test('extract file', async () => {
  const buf = await readFile(join(__dirname, 'fixture.tar.zst'));
  const files = await decompressTarzst()(buf);
  expect(files[0].path).toBe('test.jpg');

  const type = await fileType.fromBuffer(files[0].data);
  expect(type).toBeDefined();
  expect(type!.ext).toBe('jpg');
});

test('return empty array if non-valid file is supplied', async () => {
  const buf = await readFile(__filename);
  const files = await decompressTarzst()(buf);
  expect(files.length).toBe(0);
});

test('throw on wrong input', () => {
  expect(decompressTarzst()('foo' as unknown as Buffer))
    .rejects.toThrow('Expected a Buffer, got string');
});
