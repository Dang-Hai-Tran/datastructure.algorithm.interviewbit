import { sortArrayByParity } from "./sortArrayByParity";

describe('Test sortArrayByParity function', () => {
    it("case 1", () => {
        let nums = [3,1,2,4];
        let out = [2,4,3,1];
        expect(sortArrayByParity(nums)).toEqual(out);
    })
});
