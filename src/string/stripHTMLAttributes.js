import * as _ from "lamb";

/**
 * Remove all HTML attributes from a string containing HTML.
 * @example
 * const htmlString = "<p class=\"foo bar\" id=\"main\">Lorem ipsum</p>";
 *
 * stripHTMLAttributes(htmlString) // => "<p>Lorem ipsum</p>"
 *
 * @memberof module:@cgnal/utils/string
 * @since 0.0.1
 * @function
 * @param {String} source
 * @returns {String}
 */
const stripHTMLAttributes = _.replace(
    /<((?:[a-z_]+[\w.-]*:)?(?:[a-z_]+[\w.-]*)+)(?:.*?)(\/?)>/g,
    "<$1$2>"
);

export default stripHTMLAttributes;
