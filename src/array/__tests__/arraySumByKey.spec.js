import { arraySumByKey } from "..";

describe("arraySumByKey", () => {
    const testArr = [
        { "value": 5, "uid": "id1" },
        { "value": 3, "uid": "id2" },
        { "value": 6, "uid": "id3" }
    ];

    it("should sum the numeric values contained in a key in an array of objects", () => {
        expect(arraySumByKey("value")(testArr)).toBe(14);
    });
});
