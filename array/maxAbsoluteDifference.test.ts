import { maxAbsoluteDifference } from "./maxAbsoluteDifference";

describe("Test maxAbsoluteDifference function", () => {
    test("case 1", () => {
        let arr = [1, 3, -1];
        expect(maxAbsoluteDifference(arr)).toEqual(5);
    })
})
