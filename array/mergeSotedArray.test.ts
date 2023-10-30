import { merge, mergeBetter } from "./mergeSortedArray";

describe("Test merge function", () => {
    test("case 1", () => {
        let nums1 = [1, 2, 3, 0, 0, 0];
        let m = 3;
        let nums2 = [2, 5, 6];
        let n = 3;
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });
});

describe("Test mergeBetter function", () => {
    test("case 1", () => {
        let nums1 = [1, 2, 3, 0, 0, 0];
        let m = 3;
        let nums2 = [2, 5, 6];
        let n = 3;
        mergeBetter(nums1, m, nums2, n);
        console.log(nums1);
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });
});
