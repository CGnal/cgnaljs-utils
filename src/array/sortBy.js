import * as _ from "lamb";

/**
 * Builds a function that performs an ascending sort using the values of the given key.
 * @memberof module:@cgnal/utils/array
 * @since 0.0.2
 * @function
 * @param {String} key
 * @returns {Function} <code>Object[] => Object[]</code>
 */
const sortBy = key => _.sortWith([_.getKey(key)]);

export default sortBy;
