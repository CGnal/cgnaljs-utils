/**
 * Creates an object with a single key / value pair.<br/>
 * @memberof module:@cgnal/utils/object
 * @since 0.0.1
 * @function
 * @param {String} key
 * @returns {Function} <code>value => {[key]: value}</code>
 */
const putInKey = key => value => ({ [key]: value });

export default putInKey;
