import { isContainedIn } from "..";

describe("isContainedIn", () => {
    const testArr = [2, 5, 3, -0, 1, 4];

    it("should build a predicate to check if a value is contained in an array-like", () => {
        const isInTestArr = isContainedIn(testArr);

        expect(isInTestArr(-0)).toBe(true);
        expect(isInTestArr(0)).toBe(true);
        expect(isInTestArr(3)).toBe(true);
        expect(isInTestArr(11)).toBe(false);
    });
});
