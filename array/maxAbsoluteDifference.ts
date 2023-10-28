// Naive approach
// function maxAbsoluteDifference(arr: number[]): number {
//     let maxDiff = -1;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             let currentDiff = Math.abs(arr[i] - arr[j]) + Math.abs(i - j);
//             if (currentDiff > maxDiff) maxDiff = currentDiff;
//         }
//     }
//     return maxDiff;
// }

function maxAbsoluteDifference(arr: number[]): number {
    let n = arr.length;
    let maxCase1 = -Infinity;
    let minCase1 = Infinity;
    let maxCase2 = -Infinity;
    let minCase2 = Infinity;
    for (let i = 0; i < n; i++) {
        maxCase1 = Math.max(maxCase1, arr[i] - i);
        minCase1 = Math.min(minCase1, arr[i] - i);
        maxCase2 = Math.max(maxCase2, arr[i] + i);
        minCase2 = Math.min(minCase2, arr[i] + i);
    }
    let maxVal = Math.max(maxCase1 - minCase1, maxCase2 - minCase2);
    return maxVal;
}

export { maxAbsoluteDifference };
