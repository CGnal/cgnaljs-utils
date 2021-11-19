import { getMinAndMaxFromKey } from "..";

describe("getMinAndMaxFromKey", () => {
    const testArr = [
        { "value": 5, "uid": "id1" },
        { "value": 3, "uid": "id2" },
        { "value": 6, "uid": "id3" }
    ];

    it("should get the min and max values contained in a key in an array of objects", () => {
        expect(getMinAndMaxFromKey("value")(testArr)).toStrictEqual([3, 6]);
    });
});
