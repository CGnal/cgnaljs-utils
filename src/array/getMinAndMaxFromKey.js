import * as _ from "lamb";

import getMinAndMax from "./getMinAndMax";

/**
 * Gets the min and max values contained in the given key in an array of objects.
 * @example
 * const scores = [
 *     { score: 7, user: "John" },
 *     { score: 9, user: "Jane" },
 *     { score: 5, user: "Mario" }
 * ];
 * const getMinAndMaxScore = getMinAndMaxFromKey("score");
 *
 * getMinAndMaxScore(scores) // => [5, 9]
 *
 * @memberof module:@cgnal/utils/array
 * @since 0.0.5
 * @function
 * @param {String} key
 * @returns {Function} <code>Object[] => Array<Number, Number></code>
 */
const getMinAndMaxFromKey = key => _.compose(getMinAndMax, _.pluck(key));

export default getMinAndMaxFromKey;
