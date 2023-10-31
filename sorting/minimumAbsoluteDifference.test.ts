import { minimumAbsDifference } from "./minimumAbsoluteDifference";

describe("Test", () => {
    test("case 1", () => {
        let arr = [4, 2, 1, 3];
        let out = [
            [1, 2],
            [2, 3],
            [3, 4],
        ];
        expect(minimumAbsDifference(arr)).toEqual(out);
    });
    test("case 2", () => {
        let arr = [1, 3, 6, 10, 15];
        let out = [[1, 3]];
        expect(minimumAbsDifference(arr)).toEqual(out);
    });
    test("case 3", () => {
        let arr = [3, 8, -10, 23, 19, -4, -14, 27];
        let out = [
            [-14, -10],
            [19, 23],
            [23, 27],
        ];
        expect(minimumAbsDifference(arr)).toEqual(out);
    });
});
