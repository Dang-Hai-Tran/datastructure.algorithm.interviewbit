import { lightToActives } from "./light_to_actives";

describe("Test lightToActives function", () => {
    test("case 1", () => {
        let A = [0, 0, 1, 1, 1, 0, 0, 1];
        let B = 3;
        expect(lightToActives(A, B)).toEqual(2);
    });
    test("case 2", () => {
        let A = [0, 0, 0, 1, 0];
        let B = 3;
        expect(lightToActives(A, B)).toEqual(-1);
    });
    test("case 3", () => {
        let A = [1, 1, 1, 1];
        let B = 3;
        expect(lightToActives(A, B)).toEqual(1);
    });
    test("case 4", () => {
        let A = [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0];
        let B = 4;
        expect(lightToActives(A, B)).toEqual(3);
    });
});
