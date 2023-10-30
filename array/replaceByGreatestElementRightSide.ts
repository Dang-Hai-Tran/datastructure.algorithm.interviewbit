// Naive time O(n2) space 0(n)
function replaceElements(arr: number[]): number[] {
    if (arr.length <= 1) return [-1];
    for (let i = 0; i < arr.length - 1; i++) {
        let maxRight = arr[arr.length - 1];
        for (let right = arr.length - 1; right > i; right--) {
            if (arr[right] > maxRight) maxRight = arr[right];
        }
        arr[i] = maxRight;
    }
    arr[arr.length - 1] = -1;
    return arr;
}

// Better time O(n) space O(n)
function replaceElementsBetter(arr: number[]): number[] {
    let maxRight = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        let tmp = arr[i];
        arr[i] = maxRight;
        maxRight = Math.max(maxRight, tmp);
    }
    return arr;
}

export { replaceElements, replaceElementsBetter };
