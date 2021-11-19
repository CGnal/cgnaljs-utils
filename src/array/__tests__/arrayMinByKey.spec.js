import { arrayMinByKey } from "..";

describe("arrayMinByKey", () => {
    const testArr = [
        { "value": 5, "uid": "id1" },
        { "value": 3, "uid": "id2" },
        { "value": 6, "uid": "id3" }
    ];

    it("should get the min numeric value of a key in an array of objects", () => {
        expect(arrayMinByKey("value")(testArr)).toBe(3);
    });
});
