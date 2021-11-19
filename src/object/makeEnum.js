import * as _ from "lamb";

/**
 * Creates an "enumerator" from a list of strings.<br/>
 * The result will be a frozen object having both as keys and values
 * the strings in the list.
 * @example
 * const DIRECTION = makeEnum(["BOTTOM", "LEFT", "RIGHT", "UP"]);
 *
 * // DIRECTION will be:
 * //     {
 * //         BOTTOM: "BOTTOM",
 * //         LEFT: "LEFT",
 * //         RIGHT: "RIGHT",
 * //         UP: "UP"
 * //     }
 *
 * @memberof module:@cgnal/utils/object
 * @since 0.0.2
 * @function
 * @param {String[]} values
 * @returns {Object}
 */
const makeEnum = values => Object.freeze(_.make(values, values));

export default makeEnum;
