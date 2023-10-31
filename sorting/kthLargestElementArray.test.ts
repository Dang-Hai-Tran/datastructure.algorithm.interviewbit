import { findKthLargest } from "./kthLargestElementArray";

describe("Test findKthLargest function", () => {
    test("case 1", () => {
        let nums = [3, 2, 1, 5, 6, 4],
            k = 2;
        let out = 5;
        expect(findKthLargest(nums, k)).toBe(out);
    });
    test("case 2", () => {
        let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
            k = 4;
        let out = 4;
        expect(findKthLargest(nums, k)).toBe(out);
    });
});
