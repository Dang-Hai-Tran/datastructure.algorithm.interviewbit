import { maxSumContiguousSubArray } from "./max_sum_contiguous_subarray";

describe("Test function maxSumContiguousSubArray", () => {
    test("case 1", () => {
        let arr = [1, 2, 3, 4, -10];
        expect(maxSumContiguousSubArray(arr)).toEqual(10);
    });
    test("case 2", () => {
        let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
        expect(maxSumContiguousSubArray(arr)).toEqual(6);
    });
    test("case 3", () => {
        let arr = [-500];
        expect(maxSumContiguousSubArray(arr)).toEqual(-500);
    });
    test("case 4", () => {
        let arr = [-163, -20];
        expect(maxSumContiguousSubArray(arr)).toEqual(-20);
    });
    test("case 5", () => {
        let arr = [-89, -277, -475, -480, -420];
        expect(maxSumContiguousSubArray(arr)).toEqual(-89);
    });
});
