import assert from 'assert'
import mock from 'mock-fs';
import { readFileSync } from 'fs';
import get from '../getHandlers.js'

describe('GET', function () {
  beforeEach(() => {
      mock({
        'data.json': "{\"foo\":\"bar\"}",
      });
  });
  it('should work for star (*) as an argument', async () => {
    const file = `${process.cwd()}/data.json`
    let res = await get("*")
    const result = readFileSync(file, 'utf8');
    assert.deepStrictEqual(JSON.parse(result), {"foo":"bar"});
    assert.deepStrictEqual(res, { foo: 'bar' });
  });
  it('should work for fieldName as an argument', async () => {
    const file = `${process.cwd()}/data.json`
    let res = await get("foo")
    const result = readFileSync(file, 'utf8');
    assert.deepStrictEqual(JSON.parse(result), {"foo":"bar"});
    assert.equal(res, 'bar');

  });

  after(() => {
      mock.restore();
  }); 
});