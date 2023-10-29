function makeEqualElementArray(A: number[], B: number): number {
    A.sort((a, b) => a - b);
    for (let i = 0; i < A.length - 1; i++) {
        if (Math.abs(A[i] - A[i + 1]) != Math.abs(B)) return 0;
    }
    return 1;
}

let A = [3, 2, 3, 3, 1, 2, 3, 2, 2, 1, 2, 2, 1, 3, 2, 3, 2, 2, 1, 2, 1, 1, 1, 1, 1, 3, 3, 1, 1, 3, 3, 3, 2, 3, 2];
let B = 2;
console.log(makeEqualElementArray(A, B));

export { makeEqualElementArray };
