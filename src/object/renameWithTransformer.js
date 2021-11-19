import * as _ from "lamb";

/**
 * Creates a copy of an object with keys renamed by using the given transformer to generate
 * the new property names.
 * @memberof module:@cgnal/utils/object
 * @since 0.0.5
 * @function
 * @param {Function} transformer <code>oldKey:String => newKey:String</code>
 * @returns {Function} <code>Object => Object</code>
 */
const renameWithTransformer = transformer => _.renameWith(_.pipe([
    _.keys,
    _.collect([_.identity, _.mapWith(transformer)]),
    _.apply(_.make)
]));

export default renameWithTransformer;
