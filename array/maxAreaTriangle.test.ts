import { maxAreaTriangle } from "./maxAreaTriangle";

describe("Test maxAreaTriangle function", () => {
    test("case 1", () => {
        let arr = ["rrrrr", "rrrrg", "rrrrr", "bbbbb"];
        expect(maxAreaTriangle(arr)).toEqual(6);
    });
    test("case 2", () => {
        let arr = ["rrr", "rrr", "rrr", "rrr"];
        expect(maxAreaTriangle(arr)).toEqual(0);
    });
    test("case 3", () => {
        let arr = [
            "rggb",
            "brbg",
            "grrr",
            "gbbr",
            "rrgg",
            "rrrr",
            "grrr",
            "rbrr",
            "bgrg",
            "grgr",
            "bgrg",
            "grbr",
            "rrbg",
            "bggg",
            "grbb",
            "bggb",
            "grgb",
            "brrb",
            "grrb",
            "rrbb",
        ];
        expect(maxAreaTriangle(arr)).toEqual(29);
    });
});
