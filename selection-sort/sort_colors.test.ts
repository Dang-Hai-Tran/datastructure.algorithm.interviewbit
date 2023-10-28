import { sortColors } from "./sort_colors";

describe("sortColors", () => {
    it("should sort the colors in ascending order", () => {
        // Test case 1: Array with unsorted colors
        let nums = [2, 0, 1];
        sortColors(nums);
        expect(nums).toEqual([0, 1, 2]);

        // Test case 2: Array with duplicate colors
        nums = [2, 0, 2, 1, 1, 0];
        sortColors(nums);
        expect(nums).toEqual([0, 0, 1, 1, 2, 2]);

        // Test case 3: Array with already sorted colors
        nums = [0, 1, 2];
        sortColors(nums);
        expect(nums).toEqual([0, 1, 2]);

        // Additional test cases can be added as needed
    });
});
