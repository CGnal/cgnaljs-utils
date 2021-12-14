import * as _ from "lamb";

/**
 * Partitions a source object into an array of two objects. The first one will have the keys of
 * the source satisfying the given predicate, the other one the remaining keys.
 * @example
 * const person = {
 *     name: "John",
 *     surname: "Doe",
 *     age: 45,
 *     score: 23.7
 * };
 * const isNumber = v => typeof v === "number";
 * const partitionNumberKeys = partitionKeysWith(isNumber);
 *
 * partitionNumberKeys(person) // =>
 * // [
 * //     { age: 45, score: 23.7 },
 * //     { name: "John", surname: "Doe" }
 * // ]
 *
 * @memberof module:@cgnal/utils/object
 * @since 0.0.5
 * @function
 * @param {Function} predicate a Lamb [ObjectIteratorCallback]{@link https://ascartabelli.github.io/lamb/types.html#ObjectIteratorCallback}
 * returning a [Boolean]{@link Boolean}
 * @returns {Function} <code>Object => [Object, Object]</code>
 */
const partitionKeysWith = predicate => _.collect([_.pickIf(predicate), _.skipIf(predicate)]);

export default partitionKeysWith;
