import * as _ from "lamb";

/**
 * Builds a function that performs a descending sort using the values of the given key.
 * @memberof module:@cgnal/utils/array
 * @since 0.0.2
 * @function
 * @param {String} key
 * @returns {Function} <code>Object[] => Object[]</code>
 */
const sortDescBy = key => _.sortWith([_.sorterDesc(_.getKey(key))]);

export default sortDescBy;
