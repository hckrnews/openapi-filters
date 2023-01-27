import test from 'node:test';
import assert from 'node:assert';
import { makeFilters } from './index.js';
import openAPIspec from './__fixture__/openapi-spec.js';

test('Test the OpenAPI filters', async (t) => {
    await t.test('Test without params', async () => {
        const filters = makeFilters(openAPIspec);
        const params = {};
        const result = filters(params);
        const expectedResult = {
            page: 1,
            size: 42,
        };

        assert.deepEqual(result, expectedResult);
    });

    await t.test('Test with params', async () => {
        const filters = makeFilters(openAPIspec);
        const params = {
            page: 1,
            size: 42,
        };
        const result = filters(params);
        const expectedResult = {
            page: 1,
            size: 42,
        };

        assert.deepEqual(result, expectedResult);
    });
});
