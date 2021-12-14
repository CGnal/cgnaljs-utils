import * as _ from "lamb";

/**
 * Groups an array-like of objects by the given key.
 * @example
 * const persons = [
 *     { name: "Jane", city: "New York" },
 *     { name: "John", city: "New York" },
 *     { name: "Mario", city: "Rome" },
 *     { name: "Paolo" }
 * ];
 * const groupByCity = groupByKey("city");
 *
 * groupByCity(persons) // =>
 * // {
 * //    "New York": [
 * //       { "name": "Jane", "city": "New York" },
 * //       { "name": "John", "city": "New York" }
 * //   ],
 * //   "Rome": [
 * //       { "name": "Mario", "city": "Rome" }
 * //   ],
 * //   "undefined": [
 * //       { "name": "Paolo" }
 * //   ]
 * // }
 *
 * @memberof module:@cgnal/utils/array
 * @since 0.0.5
 * @function
 * @param {String} key
 * @returns {Function} <code>Object[] => Object<String, Object[]></code>
 */
const groupByKey = _.compose(_.groupBy, _.getKey);

export default groupByKey;
