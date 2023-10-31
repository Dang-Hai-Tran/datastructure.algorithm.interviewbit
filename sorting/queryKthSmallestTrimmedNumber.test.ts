import { smallestTrimmedNumbers } from "./queryKthSmallestTrimmedNumber";

describe("Test smallestTrimmedNumbers func", () => {
    test("case 1", () => {
        let nums = ["102", "473", "251", "814"];
        let queries = [
            [1, 1],
            [2, 3],
            [4, 2],
            [1, 2],
        ];
        let out = [2, 2, 1, 0];
        expect(smallestTrimmedNumbers(nums, queries)).toEqual(out);
    });
    test("case 1", () => {
        let nums = ["24", "37", "96", "04"];
        let queries = [
            [2, 1],
            [2, 2],
        ];
        let out = [3, 0];
        expect(smallestTrimmedNumbers(nums, queries)).toEqual(out);
    });
});
