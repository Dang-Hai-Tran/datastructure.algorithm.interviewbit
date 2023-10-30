// Naive approach: time 0(n) , space O(n)
function duplicateZeros(arr: number[]): void {
    let brr = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            brr.push(arr[i]);
            count++;
        } else {
            brr.push(arr[i]);
            brr.push(arr[i]);
            count += 2;
        }
        if (count == arr.length) break;
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = brr[i];
    }
}
// Better approach: time O(n), space O(n)
function duplicateZerosBetter(arr: number[]): void {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            i++;
        }
    }
    arr.length = length;
}

export { duplicateZeros, duplicateZerosBetter };
