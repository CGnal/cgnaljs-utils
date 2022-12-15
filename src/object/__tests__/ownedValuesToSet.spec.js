import { ownedValuesToSet } from "..";

describe("ownedValuesToSet", () => {
    const baseObject = Object.create({ a: 1 }, { b: { value: 2 } });
    const source = Object.create(baseObject, {
        c: { value: 3 },
        d: { value: 4, enumerable: true },
        e: { value: 5, enumerable: true },
        f: { value: 4, enumerable: true }
    });

    it("should create a set with the values of the owned properties of an object", () => {
        const expected = new Set([4, 5]);

        expect(ownedValuesToSet(source)).toStrictEqual(expected);
    });

    it("should throw an exception if supplied with `null` or `undefined`", () => {
        expect(() => { ownedValuesToSet(null); }).toThrow();
        expect(() => { ownedValuesToSet(void 0); }).toThrow();
    });
});
