function lightToActives(A: number[], B: number): number {
    const N = A.length;
    let count = 0;
    let i = 0;

    while (i < N) {
        let found = false;
        let j = Math.min(i + B - 1, N - 1);

        while (j >= Math.max(0, i - (B - 1))) {
            if (A[j] === 1) {
                found = true;
                count++;
                i = j + B;
                break;
            }
            j--;
        }

        if (!found) {
            return -1;
        }
    }

    return count;
}

export { lightToActives };
