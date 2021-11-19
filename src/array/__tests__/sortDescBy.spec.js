import { sortDescBy } from "..";

describe("sortDescBy", () => {
    const testArr = [
        { "value": 5, "uid": "id1" },
        { "value": 3, "uid": "id2" },
        { "value": 6, "uid": "id3" }
    ];
    const testArrCopy = testArr.slice();
    const sortedByValueDesc = [
        { "value": 6, "uid": "id3" },
        { "value": 5, "uid": "id1" },
        { "value": 3, "uid": "id2" }
    ];

    it("should build a function that performs a descending sort using the values of the given key", () => {
        expect(sortDescBy("value")(testArr)).toStrictEqual(sortedByValueDesc);
        expect(testArr).toStrictEqual(testArrCopy);
    });
});
