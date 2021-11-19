import { stripHTML } from "..";

describe("stripHTML", () => {
    const htmlString = "<p>Lorem <strong class=\"foo bar\">ipsum dolor</strong> sit amet</p>";
    const htmlStringNoHTML = "Lorem ipsum dolor sit amet";

    it("should remove all HTML tags from a string", () => {
        expect(stripHTML(htmlString)).toBe(htmlStringNoHTML);
    });
});
