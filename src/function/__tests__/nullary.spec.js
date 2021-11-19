import { nullary } from "..";

describe("nullary", () => {
    it("should build a function that avoids to pass arguments to the given one", () => {
        const fn = jest.fn();
        const nullaryFn = nullary(fn);

        nullaryFn(1, 2, 3);

        expect(fn).toHaveBeenCalledTimes(1);
        expect(fn).toHaveBeenCalledWith();
    });
});
