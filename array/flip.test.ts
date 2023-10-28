import { flip } from "./flip";

describe("Test flip function", () => {
    test("case 1", () => {
        let str = "010";
        expect(flip(str)).toEqual([1, 1]);
    });
    test("case 2", () => {
        let str = "111";
        expect(flip(str)).toEqual([]);
    });
    test("case 3", () => {
        let str = "11001101";
        expect(flip(str)).toEqual([3, 4]);
    });
});
