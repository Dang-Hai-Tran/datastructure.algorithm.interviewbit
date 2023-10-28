import { maxMin } from "./maxMin";

describe("Test maxMin function", () => {
    test("case 1", () => {
        let arr = [-2, 1, -4, 5, 3];
        expect(maxMin(arr)).toEqual(1);
    });
    test("case 2", () => {
        let arr = [1, 3, 4, 1];
        expect(maxMin(arr)).toEqual(5);
    });
});
