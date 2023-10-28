function pickBotSide(A: number[], B: number): number {
    if (B >= A.length) return calculateSum(A);

    let maxSum = -Infinity; // Initialize maxSum with negative infinity

    for (let n = 0; n <= B; n++) {
        let sum1 = calculateSum(A.slice(0, n));
        let sum2 = calculateSum(A.slice(A.length - B + n, A.length));
        maxSum = Math.max(maxSum, sum1 + sum2); // Use Math.max to update maxSum
    }
    return maxSum;
}

function calculateSum(arr: number[]) {
    return arr.reduce((sum, num) => sum + num, 0);
}

export { pickBotSide };
