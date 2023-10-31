import { topKFrequent, topKFrequentBetter } from "./topKFrequentElements";

describe("Test topKFrequent function", () => {
    test("case 1", () => {
        let nums = [1, 1, 1, 2, 2, 3];
        let k = 2;
        let out = [1, 2];
        expect(topKFrequent(nums, k)).toEqual(out);
    });
});

describe("Test topKFrequentBetter function", () => {
    test("case 1", () => {
        let nums = [1, 1, 1, 2, 2, 3];
        let k = 2;
        let out = [1, 2];
        expect(topKFrequentBetter(nums, k)).toEqual(out);
    });
});
