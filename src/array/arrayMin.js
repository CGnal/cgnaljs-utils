/**
 * Gets the min value in an array of numbers.
 * @example
 * arrayMin([4, 5, 2, 3, 1]) // => 1
 *
 * @memberof module:@cgnal/utils/array
 * @since 0.0.5
 * @function
 * @param {Number[]} array
 * @returns {Number}
 */
function arrayMin (array) {
    const len = array.length;

    let result = Number.POSITIVE_INFINITY;

    for (let i = 0; i < len; i++) {
        if (array[i] < result) {
            result = array[i];
        }
    }

    return result;
}

export default arrayMin;
