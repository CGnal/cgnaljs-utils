import * as _ from "lamb";

/**
 * Remove all HTML tags from a string.
 * @example
 * const htmlString = "<p>Lorem <strong class=\"foo bar\">ipsum dolor</strong> sit amet</p>";
 *
 * stripHTML(htmlString) // => "Lorem ipsum dolor sit amet"
 *
 * @memberof module:@cgnal/utils/string
 * @since 0.0.1
 * @function
 * @param {String} source
 * @returns {String}
 */
const stripHTML = _.replace(/<[^>]+>/g, "");

export default stripHTML;
