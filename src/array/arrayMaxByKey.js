import * as _ from "lamb";

import arrayMax from "./arrayMax";

/**
 * Gets the max numeric value of the given key in an array of objects.
 * @example
 * const scores = [
 *     { score: 7, user: "John" },
 *     { score: 9, user: "Jane" },
 *     { score: 5, user: "Mario" }
 * ];
 * const getMaxScore = arrayMaxByKey("score");
 *
 * getMaxScore(scores) // => 9
 *
 * @memberof module:@cgnal/utils/array
 * @since 0.0.5
 * @function
 * @param {String} key
 * @returns {Function} <code>Object[] => Number</code>
 */
const arrayMaxByKey = key => _.compose(arrayMax, _.pluck(key));

export default arrayMaxByKey;
