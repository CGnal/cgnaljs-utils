import { makeQuerystring } from "..";

describe("makeQuerystring", () => {
    it("should build a querystring from a plain object", () => {
        const source = {
            "città": "Forlì",
            "regione": "Emilia Romagna",
            "provincia": "Forlì+Cesena",
            "popolazione": 116434,
            "foo&bar": "bar=baz"
        };
        const result = "citt%C3%A0=Forl%C3%AC&regione=Emilia%20Romagna&provincia="
            + "Forl%C3%AC%2BCesena&popolazione=116434&foo%26bar=bar%3Dbaz";

        expect(makeQuerystring(source)).toBe(result);
    });

    it("should skip `undefined` properties in the source object", () => {
        const source = { a: void 0, b: 2, c: 3 };

        expect(makeQuerystring(source)).toBe("b=2&c=3");
    });
});
