/**
 * Uses the provided `iteratee` to build a function returning a[`Map`]{@link Map}
 * with the generated keys and counts as values.<br/>
 * Like Lamb's [`countBy`]{@link https://ascartabelli.github.io/lamb/module-lamb.html#countBy}
 * but builds a function returning a [`Map`]{@link Map}.<br/>
 * Useful to keep the type of the generated keys instead of having them converted to string.
 * @example
 * const persons = [
 *     { name: "Jane", city: "New York" },
 *     { name: "John", city: "New York" },
 *     { name: "Mario", city: "Rome" },
 *     { name: "Paolo" }
 * ];
 * const countByCity = countToMapBy(({ city }) => String(city));
 *
 * countByCity(persons) // => Map { "New York" → 2, "Rome" → 1, "undefined" → 1 }
 *
 * @memberof module:@cgnal/utils/array
 * @since 0.1.6
 * @param {Function} iteratee a Lamb [ListIteratorCallback]{@link https://ascartabelli.github.io/lamb/types.html#ListIteratorCallback}
 * @returns {Function} <code>Object[] => Map<Any, Number></code>
 */
const countToMapBy = iteratee => arrayLike => {
    const result = new Map();

    for (let i = 0, len = arrayLike.length; i < len; i++) {
        const key = iteratee(arrayLike[i], i, arrayLike);

        result.set(
            key,
            result.has(key) ? result.get(key) + 1 : 1
        );
    }

    return result;
};

export default countToMapBy;
