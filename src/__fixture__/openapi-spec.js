import paginationSchema from '../openapi/pagination.js';

export default {
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
                example: 10,
                minimum: 1,
                maximum: 100000,
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
