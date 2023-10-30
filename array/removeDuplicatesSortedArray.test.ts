import { removeDuplicates, removeDuplicatesBetter } from "./removeDuplicatesSortedArray";

describe("Test removeDuplicates function", () => {
    test("case 1", () => {
        let nums = [1, 1, 2];
        expect(removeDuplicates(nums)).toBe(2);
        expect(nums).toEqual([1, 2]);
    });
    test("case 2", () => {
        let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        expect(removeDuplicates(nums)).toBe(5);
        expect(nums).toEqual([0, 1, 2, 3, 4]);
    });
});

describe("Test removeDuplicatesBetter function", () => {
    test("case 1", () => {
        let nums = [1, 1, 2];
        expect(removeDuplicatesBetter(nums)).toBe(2);
        expect(nums).toEqual([1, 2]);
    });
    test("case 2", () => {
        let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        expect(removeDuplicatesBetter(nums)).toBe(5);
        expect(nums).toEqual([0, 1, 2, 3, 4]);
    });
});
