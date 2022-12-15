import * as _ from "lamb";

/**
 * Builds a {@link Set} from the values of the owned
 * enumerable properties of an object.
 * @example
 * const source = { a: 1, b: 2, c: 1 };
 *
 * ownedValuesToSet(source) // =>  Set [ 1, 2 ]
 *
 * @memberof module:@cgnal/utils/object
 * @since 0.2.0
 * @function
 * @param {Object} source
 * @returns {Set}
 */
const ownedValuesToSet = _.compose(values => new Set(values), _.ownValues);

export default ownedValuesToSet;
