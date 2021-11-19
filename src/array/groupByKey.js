import * as _ from "lamb";

/**
 * Groups an array-like of objects by the given key.
 * @memberof module:@cgnal/utils/array
 * @since 0.0.5
 * @function
 * @param {String} key
 * @returns {Function} <code>Object[] => Object<String, Object[]></code>
 */
const groupByKey = _.compose(_.groupBy, _.getKey);

export default groupByKey;
