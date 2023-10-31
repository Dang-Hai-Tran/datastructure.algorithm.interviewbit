// Naive approach time O(n logn), space O(n)
function minimumAbsDifference(arr: number[]): number[][] {
    arr.sort((a, b) => a - b);
    let minAbsDiff = Infinity;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] < minAbsDiff) minAbsDiff = arr[i + 1] - arr[i];
    }
    let brr: number[][] = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] == minAbsDiff) {
            brr.push([arr[i], arr[i + 1]]);
        }
    }
    return brr;
}

export { minimumAbsDifference };
