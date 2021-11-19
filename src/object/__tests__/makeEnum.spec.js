import { makeEnum } from "..";

describe("makeEnum", () => {
    it("should create an enum from a list of strings", () => {
        const DIRECTION = makeEnum(["BOTTOM", "LEFT", "RIGHT", "UP"]);

        expect(DIRECTION).toEqual({
            BOTTOM: "BOTTOM",
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            UP: "UP"
        });
        expect(Object.isFrozen(DIRECTION)).toBe(true);
    });
});
