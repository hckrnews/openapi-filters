import test from 'node:test';
import assert from 'node:assert';
import getStockFilters from './get-stock-filters.js';
import openAPIspec from './__fixture__/openapi-spec.js';

test('Get stock filters use case', async (t) => {
    await t.test(
        'Test if the get stock filters returns the filters',
        async () => {
            const filters = getStockFilters({ endpoint: openAPIspec });
            const expectedFilters = [
                {
                    default: 0,
                    name: 'page',
                    type: 'number',
                },
                {
                    default: 10,
                    name: 'size',
                    type: 'number',
                },
            ];

            assert.deepEqual(filters, expectedFilters);
        }
    );
});
