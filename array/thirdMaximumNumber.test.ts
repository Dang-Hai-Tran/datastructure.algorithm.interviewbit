import { thirdMax } from "./thirdMaximumNumber";

describe("Test thirdMax func", () => {
    test("case 1", () => {
        let nums = [3, 2, 1];
        expect(thirdMax(nums)).toBe(1);
    });
    test("case 2", () => {
        let nums = [1, 2];
        expect(thirdMax(nums)).toBe(2);
    });
    test("case 3", () => {
        let nums = [2, 2, 3, 1];
        expect(thirdMax(nums)).toBe(1);
    });
    test("case 4", () => {
        let nums = [5, 2, 2];
        expect(thirdMax(nums)).toBe(5);
    });
    test("case 5", () => {
        let nums = [1, 2, 2, 5, 3, 5];
        expect(thirdMax(nums)).toBe(2);
    });
});
