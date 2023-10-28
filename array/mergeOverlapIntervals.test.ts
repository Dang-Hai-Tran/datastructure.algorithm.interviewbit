import { mergeOverlapInterval } from "./mergeOverlapIntervals";

describe("Test", () => {
    test("case 1", () => {
        let intervals = [
            [1, 3],
            [2, 6],
            [8, 10],
            [15, 18],
        ];
        let mergeIntervals = [
            [1, 6],
            [8, 10],
            [15, 18],
        ];
        expect(mergeOverlapInterval(intervals)).toEqual(mergeIntervals);
    });
    test("case 2", () => {
        let intervals = [
            [1, 10],
            [2, 9],
            [3, 8],
            [4, 7],
            [5, 6],
            [6, 6],
        ];
        let mergeIntervals = [[1, 10]];
        expect(mergeOverlapInterval(intervals)).toEqual(mergeIntervals);
    });
    test("case 3", () => {
        let intervals = [[13, 71]];
        let mergeIntervals = [[13, 71]];
        expect(mergeOverlapInterval(intervals)).toEqual(mergeIntervals);
    });
});
