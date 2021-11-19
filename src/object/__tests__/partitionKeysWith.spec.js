import { partitionKeysWith } from "..";

describe("partitionKeysWith", () => {
    const testObject = {
        name: "John",
        surname: "Doe",
        age: 45,
        score: 23.7
    };
    const isString = (value, key, source) => {
        expect(source[key]).toBe(value);

        return typeof source[key] === "string";
    };

    it("should partition an object by splitting its key / value pairs in two objects, using the given predicate", () => {
        const result = [
            { name: "John", surname: "Doe" },
            { age: 45, score: 23.7 }
        ];

        expect(partitionKeysWith(isString)(testObject)).toStrictEqual(result);
    });
});
