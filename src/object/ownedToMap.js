import * as _ from "lamb";

/**
 * Builds a {@link Map} from the owned enumerable properties of an object.
 * @example
 * const person = { name: "Jane", city: "New York" };
 *
 * ownedToMap(person) // =>  Map { name → "Jane", city → "New York" }
 *
 * @memberof module:@cgnal/utils/object
 * @since 0.2.0
 * @function
 * @param {Object} source
 * @returns {Map<String, Any>}
 */
const ownedToMap = _.compose(pairs => new Map(pairs), _.ownPairs);

export default ownedToMap;
