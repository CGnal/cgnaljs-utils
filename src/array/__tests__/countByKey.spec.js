import { countByKey } from "..";

describe("countByKey", () => {
    const testArr = [
        { "name": "Jane", "city": "New York" },
        { "name": "John", "city": "New York" },
        { "name": "Mario", "city": "Rome" },
        { "name": "Paolo" }
    ];

    it("should perform a count of an array of objects by the given key", () => {
        expect(countByKey("city")(testArr)).toStrictEqual({
            "New York": 2,
            "Rome": 1,
            "undefined": 1
        });
    });
});
