import * as _ from "lamb";

const makeEncodedPair = _.compose(
    _.joinWith("="),
    _.mapWith(encodeURIComponent)
);

/**
 * Builds a querystring from a plain object. {@link Undefined} keys will be skipped.
 * @example
 * const song = {
 *     author: "Jethro Tull",
 *     name: "Bourée",
 *     year: undefined
 * };
 *
 * makeQuerystring(song) // => "author=Jethro%20Tull&name=Bour%C3%A9e"
 *
 * @memberof module:@cgnal/utils/string
 * @since 0.0.2
 * @function
 * @param {Object} source
 * @returns {String}
 */
const makeQuerystring = _.pipe([
    _.skipIf(_.isUndefined),
    _.pairs,
    _.mapWith(makeEncodedPair),
    _.joinWith("&")
]);

export default makeQuerystring;
