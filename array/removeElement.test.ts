import { removeElement, removeElementBetter } from "./removeElement";

describe("Test removeElement func", () => {
    test("case 1", () => {
        let nums = [3, 2, 2, 3];
        let val = 3;
        expect(removeElement(nums, val)).toBe(2);
        expect(nums.sort()).toEqual([2, 2]);
    });
});

describe("Test removeElementBetter func", () => {
    test("case 1", () => {
        let nums = [3, 2, 2, 3];
        let val = 3;
        expect(removeElementBetter(nums, val)).toBe(2);
        expect(nums.sort().slice(0, 2)).toEqual([2, 2]);
    });
});
