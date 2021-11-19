import * as _ from "lamb";

/**
 * Builds a function that avoids to pass arguments to the given one.<br/>
 * A shortcut for a common use case of [<code>aritize</code>]{@link https://ascartabelli.github.io/lamb/module-lamb.html#aritize}.
 * @memberof module:@cgnal/utils/function
 * @since 0.0.13
 * @function
 * @param {Function} fn
 * @returns {Function} <code>() => Any</code>
 */
const nullary = fn => _.aritize(fn, 0);

export default nullary;
