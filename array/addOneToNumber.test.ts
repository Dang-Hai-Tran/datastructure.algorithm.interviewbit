import { addOneToNumber } from "./addOneToNumber";

describe("Test addOneToNumber function", function () {
    test("case 1", function () {
        let arr = [1, 2, 3];
        expect(addOneToNumber(arr)).toEqual([1, 2, 4]);
    });
    test("case 2", function () {
        let arr = [1, 9, 9];
        expect(addOneToNumber(arr)).toEqual([2, 0, 0]);
    });
    test("case 3", function () {
        let arr = [0, 3, 7, 6, 4, 0, 5, 5, 5];
        expect(addOneToNumber(arr)).toEqual([3, 7, 6, 4, 0, 5, 5, 6]);
    });
});
