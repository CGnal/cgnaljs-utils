import * as _ from "lamb";

const makeEncodedPair = _.compose(
    _.joinWith("="),
    _.mapWith(encodeURIComponent)
);

/**
 * Builds a querystring from a plain object.
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
