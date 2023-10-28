import { partitions } from "./partitions";

describe("Test partitions function", () => {
    test("case 1", () => {
        let arr = [1, 2, 3, 0, 3];
        let len = arr.length;
        expect(partitions(len, arr)).toEqual(2);
    })
    test("case 2", () => {
        let arr = [0, 1, -1, 0];
        let len = arr.length;
        expect(partitions(len, arr)).toEqual(1);
    })
})
