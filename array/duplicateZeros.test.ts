import { duplicateZeros, duplicateZerosBetter } from "./duplicateZeros";

describe("Test duplicateZeros function", () => {
    test("case 1", () => {
        let arr = [1, 0, 2, 3, 0, 4, 5, 0];
        let exp = [1, 0, 0, 2, 3, 0, 0, 4];
        duplicateZeros(arr);
        expect(arr).toEqual(exp);
    });
    test("case 2", () => {
        let arr = [1, 2, 3];
        let exp = [1, 2, 3];
        duplicateZeros(arr);
        expect(arr).toEqual(exp);
    });
});

describe("Test duplicateZerosBetter function", () => {
    test("case 1", () => {
        let arr = [1, 0, 2, 3, 0, 4, 5, 0];
        let exp = [1, 0, 0, 2, 3, 0, 0, 4];
        duplicateZerosBetter(arr);
        expect(arr).toEqual(exp);
    });
    test("case 2", () => {
        let arr = [1, 2, 3];
        let exp = [1, 2, 3];
        duplicateZerosBetter(arr);
        expect(arr).toEqual(exp);
    });
});
