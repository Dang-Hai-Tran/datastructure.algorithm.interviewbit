import { makeEqualElementArray } from "./maxEqualElementsArray";

describe("Test", () => {
    test("case 1", () => {
        let A = [
            3, 2, 3, 3, 1, 2, 3, 2, 2, 1, 2, 2, 1, 3, 2, 3, 2, 2, 1, 2, 1, 1, 1, 1, 1, 3, 3, 1, 1, 3, 3, 3, 2, 3, 2,
        ];
        let B = 2;
        expect(makeEqualElementArray(A, B)).toBe(0);
    });
});
