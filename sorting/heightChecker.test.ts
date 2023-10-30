import { heightChecker } from "./heightChecker";

describe("heightChecker", () => {
    it("should return 0 when input array is already sorted in ascending order", () => {
        const heights = [1, 2, 3, 4, 5];
        const result = heightChecker(heights);
        expect(result).toBe(0);
    });

    it("should return 0 when input array is empty", () => {
        const heights: number[] = [];
        const result = heightChecker(heights);
        expect(result).toBe(0);
    });

    it("should return correct count when input array is not sorted", () => {
        const heights = [5, 1, 3, 2, 4];
        const result = heightChecker(heights);
        expect(result).toBe(4);
    });
});
