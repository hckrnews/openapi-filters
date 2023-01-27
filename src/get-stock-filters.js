/**
 * @typedef {import('./index.js').Endpoint} Endpoint
 * @typedef {import('./index.js').Filter} Filter
 */

/**
 * Get tghe stock filters
 *
 * @param {object} options
 * @param {Endpoint} options.endpoint
 * @returns {Filter[]}
 */
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
