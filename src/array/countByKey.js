import * as _ from "lamb";

/**
 * Transforms an array-like of objects in a lookup table having as keys the property values
 * of the given key in the source objects and as values the count of matches for the key.
 * @example
 * const persons = [
 *     { name: "Jane", city: "New York" },
 *     { name: "John", city: "New York" },
 *     { name: "Mario", city: "Rome" },
 *     { name: "Paolo" }
 * ];
 * const countByCity = countByKey("city");
 *
 * countByCity(persons) // => { "New York": 2, "Rome": 1, "undefined": 1 }
 *
 * @memberof module:@cgnal/utils/array
 * @since 0.0.7
 * @function
 * @param {String} key
 * @returns {Function} <code>Object[] => Object<String, Number></code>
 */
const countByKey = _.compose(_.countBy, _.getKey);

export default countByKey;
