import assert from 'assert'
import mock from 'mock-fs';
import { readFileSync } from 'fs';
import get from '../getHandlers.js'

describe('GET', function () {
  beforeEach(() => {
      mock({
        'data.json': "{\"foo\":\"bar2\"}",
      });
  });
  it('should work for star as an argument', async () => {
    const file = `${process.cwd()}/data.json`
    let res2 = await get("*")
    const result = readFileSync(file, 'utf8');
    assert.deepStrictEqual(JSON.parse(result), {"foo":"bar2"});
    assert.deepStrictEqual(res2, { foo: 'bar2' });
  });
  it('should work for fieldName as an argument', async () => {
    const file = `${process.cwd()}/data.json`
    let res2 = await get("foo")
    const result = readFileSync(file, 'utf8');
    assert.deepStrictEqual(JSON.parse(result), {"foo":"bar2"});
    assert.equal(res2, 'bar2');

  });

  after(() => {
      mock.restore();
  }); 
});