import * as _ from "lamb";

/**
 * Remove all HTML tags from a string.
 * @memberof module:@cgnal/utils/string
 * @since 0.0.1
 * @function
 * @param {String} source
 * @returns {String}
 */
const stripHTML = _.replace(/<[^>]+>/g, "");

export default stripHTML;
