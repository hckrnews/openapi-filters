import test from 'node:test';
import assert from 'node:assert';
import { makeFilters } from './index.js';
import openAPIspec from './__fixture__/openapi-spec.js';

test('...', async (t) => {
    await t.test('...', async () => {
        const filters = makeFilters(openAPIspec);
        const params = {};
        const result = filters(params);
        const expectedResult = {
            page: 0,
            size: 10,
        };

        assert.deepEqual(result, expectedResult);
    });
});
