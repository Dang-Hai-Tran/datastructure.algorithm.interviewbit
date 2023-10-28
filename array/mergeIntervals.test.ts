import { mergeIntervals } from "./mergeIntervals";

describe("Test mergeIntervals function", () => {
    test("case 1", () => {
        let intervals = [
            [1, 2],
            [3, 5],
            [6, 7],
            [8, 10],
            [12, 16],
        ];
        let newInterval = [4, 9];
        expect(mergeIntervals(intervals, newInterval)).toEqual([
            [1, 2],
            [3, 10],
            [12, 16],
        ]);
    });
    test("case 2", () => {
        let intervals = [
            [1, 3],
            [6, 9],
        ];
        let newInterval = [2, 5];
        expect(mergeIntervals(intervals, newInterval)).toEqual([
            [1, 5],
            [6, 9],
        ]);
    });
    test("case 3", () => {
        let intervals = [
            [1, 2],
            [3, 6],
        ];
        let newInterval = [10, 8];
        expect(mergeIntervals(intervals, newInterval)).toEqual([
            [1, 2],
            [3, 6],
            [8, 10],
        ]);
    });
});
