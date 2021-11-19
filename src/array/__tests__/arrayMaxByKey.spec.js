import { arrayMaxByKey } from "..";

describe("arrayMaxByKey", () => {
    const testArr = [
        { "value": 5, "uid": "id1" },
        { "value": 3, "uid": "id2" },
        { "value": 6, "uid": "id3" }
    ];

    it("should get the max numeric value of a key in an array of objects", () => {
        expect(arrayMaxByKey("value")(testArr)).toBe(6);
    });
});
