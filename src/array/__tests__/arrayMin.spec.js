import { arrayMin } from "..";

describe("arrayMin", () => {
    const testArr = [-0, 1, 2, 3, 4, 5];

    it("should get the min value in an array of numbers", () => {
        expect(arrayMin(testArr)).toBe(-0);
        expect(arrayMin([])).toBe(Infinity);
    });
});
