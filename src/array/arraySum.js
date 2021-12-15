import * as _ from "lamb";

/**
 * Sums the values in the given array.
 * @example
 * arraySum([1, 2, 3, 4, 5]) // => 15
 *
 * @memberof module:@cgnal/utils/array
 * @since 0.0.5
 * @function
 * @param {Number[]} source
 * @throws {TypeError} If the received array is empty.
 * @returns {Number}
 */
const arraySum = _.reduceWith(_.sum);

export default arraySum;
