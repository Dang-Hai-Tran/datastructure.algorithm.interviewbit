import { radixSort } from "./radixSort";

describe("Test radixSort function", () => {
    test("case 1", () => {
        let nums = [170, 45, 75, 90, 802, 24, 2, 66];
        let out = [2, 24, 45, 66, 75, 90, 170, 802];
        radixSort(nums);
        expect(nums).toEqual(out);
    });
});
