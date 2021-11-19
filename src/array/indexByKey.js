import * as _ from "lamb";

/**
 * Indexes an array-like of objects by the given key.
 * @memberof module:@cgnal/utils/array
 * @since 0.0.7
 * @function
 * @param {String} key
 * @returns {Function} <code>Object[] => Object<String, Object></code>
 */
const indexByKey = _.compose(_.indexBy, _.getKey);

export default indexByKey;
