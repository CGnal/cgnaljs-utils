import { sortBy } from "..";

describe("sortBy", () => {
    const testArr = [
        { "value": 5, "uid": "id1" },
        { "value": 3, "uid": "id2" },
        { "value": 6, "uid": "id3" }
    ];
    const testArrCopy = testArr.slice();
    const sortedByValue = [
        { "value": 3, "uid": "id2" },
        { "value": 5, "uid": "id1" },
        { "value": 6, "uid": "id3" }
    ];

    it("should build a function that performs an ascending sort using the values of the given key", () => {
        expect(sortBy("value")(testArr)).toStrictEqual(sortedByValue);
        expect(testArr).toStrictEqual(testArrCopy);
    });
});
