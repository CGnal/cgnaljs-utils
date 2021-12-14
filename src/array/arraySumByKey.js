import * as _ from "lamb";

import arraySum from "./arraySum";

/**
 * Sums the values in the given key in an array of objects.
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
