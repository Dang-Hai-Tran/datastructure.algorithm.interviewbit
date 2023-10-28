function coverPoints(A: number[], B: number[]): number {
    if (A.length <= 1) return 0;

    let totalDistance = 0;

    for (let i = 0; i < A.length - 1; i++) {
        let s1 = Math.abs(A[i] - A[i + 1]);
        let s2 = Math.abs(B[i] - B[i + 1]);
        totalDistance += Math.max(s1, s2);
    }

    return totalDistance;
}
