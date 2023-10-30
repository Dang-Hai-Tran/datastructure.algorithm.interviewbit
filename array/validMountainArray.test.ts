import { validMountainArray } from "./validMountainArray";

describe("Test validMountainArray func", () => {
    test("case 1", () => {
        let arr = [0, 3, 2, 1];
        expect(validMountainArray(arr)).toBe(true);
    });
    test("case 2", () => {
        let arr = [3, 5, 5];
        expect(validMountainArray(arr)).toBe(false);
    });
    test("case 3", () => {
        let arr = [2, 1];
        expect(validMountainArray(arr)).toBe(false);
    });
});
