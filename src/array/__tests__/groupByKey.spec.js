import { groupByKey } from "..";

describe("groupByKey", () => {
    const testArr = [
        { "name": "Jane", "city": "New York" },
        { "name": "John", "city": "New York" },
        { "name": "Mario", "city": "Rome" },
        { "name": "Paolo" }
    ];

    it("should group an array of objects by the given key", () => {
        expect(groupByKey("city")(testArr)).toStrictEqual({
            "New York": [
                { "name": "Jane", "city": "New York" },
                { "name": "John", "city": "New York" }
            ],
            "Rome": [
                { "name": "Mario", "city": "Rome" }
            ],
            "undefined": [
                { "name": "Paolo" }
            ]
        });
    });
});
