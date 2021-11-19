import { indexByKey } from "..";

describe("indexByKey", () => {
    const testArr = [
        { "value": 5, "uid": "id1" },
        { "value": 3, "uid": "id2" },
        { "value": 6, "uid": "id3" }
    ];

    it("should index an array of objects by the given key", () => {
        expect(indexByKey("uid")(testArr)).toStrictEqual({
            "id1": { "value": 5, "uid": "id1" },
            "id2": { "value": 3, "uid": "id2" },
            "id3": { "value": 6, "uid": "id3" }
        });
    });
});
