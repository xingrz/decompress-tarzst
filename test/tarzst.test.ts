import { readFileSync, createReadStream } from 'fs';
import { Stream } from 'stream';
import { join } from 'path';
import * as fileType from 'file-type';
import decompressTarzst from '../src';

test('extract file', async () => {
  const buf = readFileSync(join(__dirname, 'fixture.tar.zst'));
  const files = await decompressTarzst()(buf);
  expect(files[0].path).toBe('test.jpg');

  const type = files[0].data && await fileType.fromBuffer(files[0].data);
  expect(type).toBeDefined();
  expect(type!.ext).toBe('jpg');
});

test('extract file using streams', async () => {
  const stream = createReadStream(join(__dirname, 'fixture.tar.zst'));
  const files = await decompressTarzst()(stream);
  expect(files[0].path).toBe('test.jpg');

  const type = files[0].data && await fileType.fromBuffer(files[0].data);
  expect(type).toBeDefined();
  expect(type!.ext).toBe('jpg');
});

test('extract file to fileWriter', async () => {
  const fileWriter = jest.fn().mockResolvedValue(null);

  const buf = readFileSync(join(__dirname, 'fixture.tar.zst'));
  const files = await decompressTarzst()(buf, { fileWriter });

  expect(files[0].path).toBe('test.jpg');
  expect(files[0].data).toBeUndefined();

  expect(fileWriter).toHaveBeenCalledTimes(1);
  expect(fileWriter.mock.calls[0][0]).toHaveProperty('path', 'test.jpg');
  expect(fileWriter.mock.calls[0][1]).toBeInstanceOf(Stream);
});

test('return empty array if non-valid file is supplied', async () => {
  const buf = readFileSync(__filename);
  const files = await decompressTarzst()(buf);
  expect(files.length).toBe(0);
});

test('throw on wrong input', () => {
  expect(decompressTarzst()('foo' as unknown as Buffer))
    .rejects.toThrow('Expected a Buffer or Stream, got string');
});
