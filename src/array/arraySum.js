import * as _ from "lamb";

/**
 * Sums the values in the given array.
 * @memberof module:@cgnal/utils/array
 * @since 0.0.5
 * @function
 * @param {Number[]} source
 * @returns {Number}
 */
const arraySum = _.reduceWith(_.sum);

export default arraySum;
