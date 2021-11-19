import * as _ from "lamb";

/**
 * Remove all HTML attributes from a string containing HTML.
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
