import { maxConsecutivesOnes } from "./maxConsecutivesOnes";

describe("Test", () => {
    test("case 1", () => {
        let nums = [1, 1, 0, 1, 1, 1];
        expect(maxConsecutivesOnes(nums)).toBe(3);
    });
    test('case 2', () => {
        let nums = [1,0,1,1,0,1];
        expect(maxConsecutivesOnes(nums)).toBe(2);
    });
});
