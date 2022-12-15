import { ownedToMap } from "..";

describe("ownedToMap", () => {
    const baseObject = Object.create({ a: 1 }, { b: { value: 2 } });
    const source = Object.create(baseObject, {
        c: { value: 3 },
        d: { value: 4, enumerable: true },
        e: { value: 5, enumerable: true }
    });

    it("should put the owned properties of an object into a Map", () => {
        const expected = new Map([["d", 4], ["e", 5]]);

        expect(ownedToMap(source)).toStrictEqual(expected);
    });

    it("should throw an exception if supplied with `null` or `undefined`", () => {
        expect(() => { ownedToMap(null); }).toThrow();
        expect(() => { ownedToMap(void 0); }).toThrow();
    });
});
