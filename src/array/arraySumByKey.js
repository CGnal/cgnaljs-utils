import * as _ from "lamb";

import arraySum from "./arraySum";

/**
 * Builds a function that sums the values in the given key in an array of objects.<br/>
 * The built function will throw a {@link TypeError} if the received array is empty.
 * @example
 * const scores = [
 *     { score: 7, user: "John" },
 *     { score: 9, user: "Jane" },
 *     { score: 5, user: "Mario" }
 * ];
 * const sumScores = arraySumByKey("score");
 *
 * sumScores(scores) // => 21
 *
 * @memberof module:@cgnal/utils/array
 * @since 0.0.5
 * @function
 * @param {String} key
 * @returns {Function} <code>Object[] => Number</code>
 */
const arraySumByKey = key => _.compose(arraySum, _.pluck(key));

export default arraySumByKey;
