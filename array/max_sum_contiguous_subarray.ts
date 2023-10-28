function maxSumContiguousSubArray(arr: number[]): number {
    let maxSum = arr[0];
    let currentSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        currentSum += arr[i];
        currentSum = currentSum > arr[i] ? currentSum : arr[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
}

export { maxSumContiguousSubArray };
