import { getMinAndMax } from "..";

describe("getMinAndMax", () => {
    const testArr = [2, 5, 3, -0, 1, 4];

    it("should get the min and max values contained in an array of numbers", () => {
        expect(getMinAndMax(testArr)).toStrictEqual([-0, 5]);
    });
});
