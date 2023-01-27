import test from 'node:test';
import assert from 'node:assert';
import { getFilter } from './index.js';

test('...', async (t) => {
    await t.test('...', async () => {
        const openAPIspec = {}; // json file?
        const result = getFilter(openAPIspec);
        const expectedResult = true;

        assert.deepEqual(result, expectedResult);
    });
});
