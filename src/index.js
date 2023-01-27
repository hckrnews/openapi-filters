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

const getFilter = () => true;
export { getFilter };
