import { checkIfExist } from "./checkDoubleExist";

describe('Test checkIfExist func', () => {
    test('case 1', () => {
        let arr = [10,2,5,3];
        expect(checkIfExist(arr)).toBe(true);
    });
    test('case 2', () => {
        let arr = [3,1,7,11];
        expect(checkIfExist(arr)).toBe(false);
    });
    test('case 3', () => {
        let arr = [-2,0,10,-19,4,6,-8];
        expect(checkIfExist(arr)).toBe(false);
    });
});
