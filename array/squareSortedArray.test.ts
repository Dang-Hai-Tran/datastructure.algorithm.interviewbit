import { sortedSquares } from "./squareSortedArray";
import { sortedSquaresBetter } from "./squareSortedArray";

describe("Test sortedSquares func", () => {
    test("case 1", () => {
        let nums = [-4, -1, 0, 3, 10];
        expect(sortedSquares(nums)).toEqual([0, 1, 9, 16, 100]);
    });
});

describe("Test sortedSquaresBetter func", () => {
    test("case 1", () => {
        let nums = [-4, -1, 0, 3, 10];
        expect(sortedSquaresBetter(nums)).toEqual([0, 1, 9, 16, 100]);
    });
});
