import { moveZeros } from "./moveZeros";

describe("Test", () => {
    test("case 1", () => {
        let arr = [0, 1, 0, 3, 12];
        moveZeros(arr);
        expect(arr).toEqual([1, 3, 12, 0, 0]);
    });
    test("case 2", () => {
        let arr = [0];
        moveZeros(arr);
        expect(arr).toEqual([0]);
    });
    test("case 3", () => {
        let arr = [1, 10, 2, 9, 10, 3];
        moveZeros(arr);
        expect(arr).toEqual([1, 10, 2, 9, 10, 3]);
    });
    test("case 4", () => {
        let arr = [1, 6, 1, 0, 9, 6, 2, 5, 6, 2, 10, 2, 0, 6];
        let exp = [1, 6, 1, 9, 6, 2, 5, 6, 2, 10, 2, 6, 0, 0];
        moveZeros(arr);
        expect(arr).toEqual(exp);
    });
});
