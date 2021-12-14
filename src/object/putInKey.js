/**
 * With the given key, builds a function expecting a value to
 * create an object with a single key / value pair.
 * @example
 * const createEntity = putInKey("id");
 *
 * createEntity(1) // => { id: 1 }
 * createEntity(2) // => { id: 2 }
 *
 * @memberof module:@cgnal/utils/object
 * @since 0.0.1
 * @function
 * @param {String} key
 * @returns {Function} <code>value => {[key]: value}</code>
 */
const putInKey = key => value => ({ [key]: value });

export default putInKey;
