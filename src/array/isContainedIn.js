import * as _ from "lamb";

/**
 * A left curried version of [Lamb's <code>isIn</code>]{@link https://ascartabelli.github.io/lamb/module-lamb.html#isIn}.
 * Expects the array-like first, then builds a predicate
 * waiting for the value to look for.<br/>
 * Remember that equality tests are made with [Lamb's <code>areSVZ</code>]{@link https://ascartabelli.github.io/lamb/module-lamb.html#areSVZ}
 * which performs a "SameValueZero" comparison.
 * @example
 * const values = [2, 5, 3, -0, 1, 4];
 * const isInValues = isContainedIn(values);
 *
 * isInValues(0) // => true
 * isInValues(-0) // => true
 * isInValues(3) // => true
 * isInValues(11) // => false
 *
 * @memberof module:@cgnal/utils/array
 * @since 0.0.7
 * @function
 * @param {ArrayLike} arrayLike
 * @returns {Function} <code>Any => Boolean</code>
 */
const isContainedIn = arrayLike => value => _.isIn(arrayLike, value);

export default isContainedIn;
