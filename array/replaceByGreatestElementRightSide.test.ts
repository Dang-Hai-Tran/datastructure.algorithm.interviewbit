import { replaceElements, replaceElementsBetter } from "./replaceByGreatestElementRightSide";

describe("Test replaceElements function", () => {
    test("case 1", () => {
        let arr = [17, 18, 5, 4, 6, 1];
        let out = [18, 6, 6, 6, 1, -1];
        expect(replaceElements(arr)).toEqual(out);
    });
    test("case 2", () => {
        let arr = [400];
        let out = [-1];
        expect(replaceElements(arr)).toEqual(out);
    });
});

describe("Test replaceElementsBetter function", () => {
    test("case 1", () => {
        let arr = [17, 18, 5, 4, 6, 1];
        let out = [18, 6, 6, 6, 1, -1];
        expect(replaceElementsBetter(arr)).toEqual(out);
    });
    test("case 2", () => {
        let arr = [400];
        let out = [-1];
        expect(replaceElementsBetter(arr)).toEqual(out);
    });
});
