export default ({ schema }) => ({
    type: 'object',
    required: ['count', 'pages', 'size', 'page', 'items'],
    properties: {
        cursors: { $ref: '#/components/schemas/links' },
        count: { type: 'number', minimum: 0, maximum: 100000, example: 42 },
        pages: { type: 'number', minimum: 0, example: 5 },
        size: { type: 'number', minimum: 1, example: 10, maximum: 100000 },
        page: { type: 'number', minimum: 0, example: 2 },
        items: {
            type: 'array',
            items: { $ref: `#/components/schemas/${schema}` },
        },
    },
});
