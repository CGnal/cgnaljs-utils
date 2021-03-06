/**
 * Gets the max value in an array of numbers.
 * @example
 * arrayMax([4, 5, 2, 3, 1]) // => 5
 *
 * @memberof module:@cgnal/utils/array
 * @since 0.0.5
 * @function
 * @param {Number[]} array
 * @returns {Number}
 */
function arrayMax (array) {
    const len = array.length;

    let result = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < len; i++) {
        if (array[i] > result) {
            result = array[i];
        }
    }

    return result;
}

export default arrayMax;
