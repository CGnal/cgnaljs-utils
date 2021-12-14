import * as _ from "lamb";

/**
 * Indexes an array-like of objects by the given key.
 * @example
 * const users = [
 *     {id: 1, name: "John"},
 *     {id: 2, name: "Jane"},
 *     {id: 3, name: "Mario"}
 * ];
 * const indexByID = indexByKey("id");
 *
 * indexById(users) // =>
 * // {
 * //     "1": { id: 1, name: "John" },
 * //     "2": { id: 2, name: "Jane" },
 * //     "3": { id: 3, name: "Mario" }
 * // }
 *
 * @memberof module:@cgnal/utils/array
 * @since 0.0.7
 * @function
 * @param {String} key
 * @returns {Function} <code>Object[] => Object<String, Object></code>
 */
const indexByKey = _.compose(_.indexBy, _.getKey);

export default indexByKey;
