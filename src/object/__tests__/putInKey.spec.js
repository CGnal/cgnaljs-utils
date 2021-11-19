import { putInKey } from "..";

describe("putInKey", () => {
    it("should build a function that generates an object with the received value stored in the given key", () => {
        const someValue = { a: 1 };
        const result = putInKey("data")(someValue);

        expect(result).toStrictEqual({ data: { a: 1 } });
        expect(result.data).toBe(someValue);
    });
});
