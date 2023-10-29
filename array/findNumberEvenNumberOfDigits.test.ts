import { findNumbers } from "./findNumberEvenNumberOfDigits";

describe("Test findNumbers function", () => {
    test("case 1", () => {
        let nums = [12, 345, 2, 6, 7896];
        expect(findNumbers(nums)).toBe(2);
    });
    test("case 2", () => {
        let nums = [555, 901, 482, 1771];
        expect(findNumbers(nums)).toBe(1);
    });
});
