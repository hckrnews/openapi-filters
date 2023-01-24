import test from 'node:test';
import assert from 'node:assert';
import getStockFilters from './get-stock-filters.js';
import paginationSchema from './openapi/pagination.js';

test('Get stock filters use case', async (t) => {
    await t.test(
        'Test if the get stock filters returns the filters',
        async () => {
            const env = {
                API_DEFAULT_PAGE_SIZE: 42,
            };
            const endpoint = {
                operationId: 'getStockRecords',
                parameters: [
                    {
                        name: 'page',
                        description: 'page id',
                        in: 'query',
                        required: false,
                        schema: { type: 'number', example: 0, minimum: 0 },
                    },
                    {
                        name: 'size',
                        description: 'Total items per page',
                        in: 'query',
                        required: false,
                        schema: {
                            type: 'number',
                            example: env.API_DEFAULT_PAGE_SIZE,
                            minimum: 1,
                            maximum: env.API_PAGE_SIZE_MAX_RECORDS,
                        },
                    },
                ],
                security: [{ apiKey: [] }],
                responses: {
                    200: {
                        description: 'Get stock',
                        content: {
                            'application/json': {
                                schema: paginationSchema({
                                    schema: 'stockResponse',
                                }),
                            },
                        },
                    },
                    404: {
                        description:
                            'No stock is found for the given page, you should try a lower page number',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/genericResponse',
                                },
                                example: {
                                    status: 404,
                                    timestamp: '2022-10-21T07:30:31.818Z',
                                    message: 'page is not a valid number',
                                },
                            },
                        },
                    },
                },
            };
            const filters = getStockFilters({ endpoint });
            const expectedFilters = [
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

            assert.deepEqual(filters, expectedFilters);
        }
    );
});
