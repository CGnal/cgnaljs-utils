import { renameWithTransformer } from "..";

describe("renameWithTransformer", () => {
    const testObject = {
        name: "John",
        surname: "Doe",
        age: 45,
        score: 23.7
    };

    it("should create a copy of an object using the given transformer to generate the new property names", () => {
        const result = {
            NAME: "John",
            SURNAME: "Doe",
            AGE: 45,
            SCORE: 23.7
        };

        expect(renameWithTransformer(s => s.toUpperCase())(testObject)).toStrictEqual(result);
    });
});
