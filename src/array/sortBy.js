import * as _ from "lamb";

/**
 * Builds a function that performs an ascending sort using the values of the given key.
 * @example
 * const scores = [
 *     { score: 7, user: "John" },
 *     { score: 9, user: "Jane" },
 *     { score: 5, user: "Mario" }
 * ];
 * const sortByScore = sortBy("score");
 *
 * sortByScore(scores) // =>
 * // [
 * //     { score: 5, user: "Mario" },
 * //     { score: 7, user: "John" },
 * //     { score: 9, user: "Jane" }
 * // ]
 *
 * @memberof module:@cgnal/utils/array
 * @since 0.0.2
 * @function
 * @param {String} key
 * @returns {Function} <code>Object[] => Object[]</code>
 */
const sortBy = key => _.sortWith([_.getKey(key)]);

export default sortBy;
