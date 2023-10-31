import { bucketSort } from "./bucketSort";

describe("Test bucketSort func", () => {
    test("case 1", () => {
        let nums = [170, 45, 75, 90, 802, 24, 2, 66];
        let K = 10;
        let out = [2, 24, 45, 66, 75, 90, 170, 802];
        expect(bucketSort(nums, K)).toEqual(out);
    });
});
