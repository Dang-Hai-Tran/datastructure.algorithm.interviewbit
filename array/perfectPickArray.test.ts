import { perfectPeakArray } from "./perfectPickArray";

describe("Test", () => {
    test("case 1", () => {
        let arr = [5, 1, 4, 3, 6, 8, 10, 7, 9];
        expect(perfectPeakArray(arr)).toEqual(1);
    });
    test("case 2", () => {
        let arr = [5, 1, 4, 4];
        expect(perfectPeakArray(arr)).toEqual(0);
    });
    test("case 3", () => {
        let arr = [
            9488, 25784, 5652, 9861, 31311, 8611, 1671, 7129, 28183, 2743, 11059, 4473, 7927, 21287, 2259, 7214, 32529,
        ];
        expect(perfectPeakArray(arr)).toEqual(0);
    });
    test("case 4", () => {
        let arr = [1, 2, 3, 4, 5, 4, 3, 2, 3, 10];
        expect(perfectPeakArray(arr)).toEqual(0);
    });
});
