import * as _ from "lamb";

/**
 * Selects the desired keys from an array of objects; much like the SQL statement with
 * the same name.
 * @example
 * const users = [
 *     {id: 1, name: "Jane", surname: "Doe", active: false},
 *     {id: 2, name: "John", surname: "Doe", active: true},
 *     {id: 3, name: "Mario", surname: "Rossi", active: true},
 *     {id: 4, name: "Paolo", surname: "Bianchi", active: false}
 * ];
 * const selectUserInfo = select(["id", "active"]);
 *
 * selectUserInfo(users) // =>
 * // [
 * //     {id: 1, active: false},
 * //     {id: 2, active: true},
 * //     {id: 3, active: true},
 * //     {id: 4, active: false}
 * // ]
 *
 * @memberof module:@cgnal/utils/array
 * @since 0.0.2
 * @function
 * @param {String[]} keys
 * @returns {Function} <code>Object[] => Object[]</code>
 */
const select = _.compose(_.mapWith, _.pick);

export default select;
