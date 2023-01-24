import test from 'node:test';
import assert from 'node:assert';
import { getFilter } from './index.js';

test('...', async (t) => {
    await t.test('...', async () => {
        const result = getFilter();
        const expectedResult = true;

        assert.deepEqual(result, expectedResult);
    });
});
