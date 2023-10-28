import { sumOfTriplet } from "./sum_triplet";

describe("Test sumOfTriplet function", () => {
    test("case 1", () => {
        let A = [2, 5, 3, 1, 4, 9];
        expect(sumOfTriplet(A)).toEqual(16);
    });
    test("case 2", () => {
        let A = [1, 2, 3];
        expect(sumOfTriplet(A)).toEqual(6);
    });
    test("case 3", () => {
        let A = [ 22649, 27447, 23806, 15891, 6730, 24371, 15351, 15007, 31102, 24394, 3549, 19630, 12624, 24085 ];
        expect(sumOfTriplet(A)).toEqual(81198);
    });
    test("case 4", () => {
        let A = [ 18468, 6335, 26501, 19170, 15725, 11479, 29359, 26963, 24465, 5706, 28146, 23282, 16828, 9962, 492, 2996, 11943, 4828, 5437, 32392, 14605 ];
        expect(sumOfTriplet(A)).toEqual(88252);
    });
    test("case 5", () => {
        let A = [ 32592, 18763, 1656, 17411, 6360, 27625, 20538, 21549, 6484, 27596 ];
        expect(sumOfTriplet(A)).toEqual(69683);
    });
});
