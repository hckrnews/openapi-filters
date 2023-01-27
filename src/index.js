import getStockFilters from './get-stock-filters.js';
import { parseFilters } from './parse-filters.js';

/**
 * @typedef {object} Filter
 * @property {any=} default
 * @property {string} name
 * @property {string} type
 */

/**
 * @typedef {object} Schema
 * @property {any=} example
 * @property {string} type
 * @property {number=} minimum
 * @property {number=} maximum
 */

/**
 * @typedef {object} Parameter
 * @property {string} name
 * @property {string} description
 * @property {string} in
 * @property {boolean=} required
 * @property {Schema=} schema
 */

/**
 * @typedef {object} Endpoint
 * @property {string} operationId
 * @property {Parameter[]} parameters
 * @property {object[]=} security
 * @property {object} responses
 */

const makeFilters = (openAPIspec) => {
    const filters = getStockFilters({ endpoint: openAPIspec });
    return (params) => parseFilters(params, filters);
};
export { makeFilters };
