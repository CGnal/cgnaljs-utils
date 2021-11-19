import * as _ from "lamb";

import arrayMax from "./arrayMax";
import arrayMin from "./arrayMin";

/**
 * Gets the min and max values contained in an array of numbers.
 * @memberof module:@cgnal/utils/array
 * @since 0.0.8
 * @function
 * @param {Number[]}
 * @returns {Array<Number, Number>}
 */
const getMinAndMax = _.collect([arrayMin, arrayMax]);

export default getMinAndMax;
