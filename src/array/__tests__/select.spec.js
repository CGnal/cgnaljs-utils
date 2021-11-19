import { select } from "..";

describe("select", () => {
    const testArr = [
        { "2016-01-02": 1, "value": 5, "uid": "id1" },
        { "2015-05-04": 2, "value": 3, "uid": "id2" },
        { "2016-01-01": 3, "value": 6, "uid": "id3" }
    ];

    const onlyIdAndValue = [
        { "value": 5, "uid": "id1" },
        { "value": 3, "uid": "id2" },
        { "value": 6, "uid": "id3" }
    ];

    const onlyValue = [
        { "value": 5 },
        { "value": 3 },
        { "value": 6 }
    ];

    it("should allow to pick the selected keys from an array of objects", () => {
        expect(select(["uid", "value"])(testArr)).toStrictEqual(onlyIdAndValue);
        expect(select(["value"])(testArr)).toStrictEqual(onlyValue);
    });

    it("should return an array of empty objects if no properties are specified", () => {
        expect(select([])(testArr)).toStrictEqual([{}, {}, {}]);
    });

    it("should return an empty array if it receives an empty array", () => {
        expect(select(["uid", "value"])([])).toStrictEqual([]);
    });
});
