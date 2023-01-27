import test from 'node:test';
import assert from 'node:assert';
import { parseFilters } from './parse-filters.js';

const filters = [
    {
        default: 0,
        name: 'page',
        type: 'number',
    },
    {
        default: 42,
        name: 'size',
        type: 'number',
    },
];

test('Parse filters use case', async (t) => {
    await t.test('Test if it parse the filters with param', async () => {
        const params = {
            page: 42,
            size: 12,
        };

        const result = parseFilters(params, filters);
        const expectedResult = {
            page: 42,
            size: 12,
        };

        assert.deepEqual(result, expectedResult);
    });

    await t.test('Test if it receive the default values', async () => {
        const params = {};

        const result = parseFilters(params, filters);
        const expectedResult = {
            page: 0,
            size: 42,
        };

        assert.deepEqual(result, expectedResult);
    });
});
