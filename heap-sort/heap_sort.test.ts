import { sortArray } from "./heap_sort";

describe("sortArray", () => {
    it("should return an empty array when given an empty array", () => {
        const result = sortArray([]);
        expect(result).toEqual([]);
    });

    it("should correctly sort an array of numbers in ascending order", () => {
        const input = [5, 2, 9, 1, 7];
        const expected = [1, 2, 5, 7, 9];
        const result = sortArray(input);
        expect(result).toEqual(expected);
    });

    it("should correctly sort an array of negative numbers", () => {
        const input = [-5, -2, -9, -1, -7];
        const expected = [-9, -7, -5, -2, -1];
        const result = sortArray(input);
        expect(result).toEqual(expected);
    });

    it("should correctly sort an array with duplicate numbers", () => {
        const input = [3, 2, 4, 1, 2];
        const expected = [1, 2, 2, 3, 4];
        const result = sortArray(input);
        expect(result).toEqual(expected);
    });
});
