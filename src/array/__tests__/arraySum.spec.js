import { arraySum } from "..";

describe("arraySum", () => {
    const testArr = [-0, 1, 2, 3, 4, 5];

    it("should sum the values contained in an array of numbers", () => {
        expect(arraySum(testArr)).toBe(15);
    });
});
