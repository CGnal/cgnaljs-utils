import * as _ from "lamb";

import arrayMin from "./arrayMin";

/**
 * Gets the min numeric value of the given key in an array of objects.
 * @memberof module:@cgnal/utils/array
 * @since 0.0.5
 * @function
 * @param {String} key
 * @returns {Function} <code>Object[] => Number</code>
 */
const arrayMinByKey = key => _.compose(arrayMin, _.pluck(key));

export default arrayMinByKey;
