export default ({ endpoint }) => {
    const filters = endpoint.parameters
        .filter((filter) => filter.in === 'query')
        .map((filter) => ({
            name: filter.name,
            default: filter.schema.example,
            type: filter.schema.type,
        }));
    return filters;
};
