import { stripHTMLAttributes } from "..";

describe("stripHTMLAttributes", () => {
    const htmlString = "<p>Lorem <strong class=\"foo bar\">ipsum dolor</strong> sit amet</p>";
    const htmlStringNoAttrs = "<p>Lorem <strong>ipsum dolor</strong> sit amet</p>";

    it("should remove all HTML attributes from a string", () => {
        expect(stripHTMLAttributes(htmlString)).toBe(htmlStringNoAttrs);
    });
});
