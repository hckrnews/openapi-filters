/**
 * @typedef {import('./index.js').Filter} Filter
 */

/**
 * Parse filter
 *
 * @param {any} value
 * @param {Filter} filter
 * @returns {any}
 */
const parseFilter = (value, filter) =>
    value ? value.valueOf() : filter.default;

/**
 * Parse filters
 *
 * @param {object} params
 * @param {Filter[]} filters
 * @returns {object}
 */
const parseFilters = (params, filters) =>
    Object.fromEntries(
        filters.map((filter) => {
            const param = filter.name;
            const paramValue = params[param];
            return [param, parseFilter(paramValue, filter)];
        })
    );

export { parseFilters, parseFilter };
