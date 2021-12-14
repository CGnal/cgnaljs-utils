import * as _ from "lamb";

/**
 * Builds a function that performs a descending sort using the values of the given key.
 * @example
 * const scores = [
 *     { score: 7, user: "John" },
 *     { score: 9, user: "Jane" },
 *     { score: 5, user: "Mario" }
 * ];
 * const sortDescsByScore = sortDescBy("score");
 *
 * sortDescsByScore(scores) // =>
 * // [
 * //     { score: 9, user: "Jane" },
 * //     { score: 7, user: "John" },
 * //     { score: 5, user: "Mario" }
 * // ]
 *
 * @memberof module:@cgnal/utils/array
 * @since 0.0.2
 * @function
 * @param {String} key
 * @returns {Function} <code>Object[] => Object[]</code>
 */
const sortDescBy = key => _.sortWith([_.sorterDesc(_.getKey(key))]);

export default sortDescBy;
