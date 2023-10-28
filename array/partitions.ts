function partitions(len: number, arr: number[]): number {
    let sumArr = calculateSum(0, len - 1, arr);
    if (sumArr % 3 !== 0) return 0;
    let count = 0;
    let onePart = sumArr / 3;
    let i = 0;
    let sum1 = 0;
    while (i < len - 2) {
        sum1 += arr[i];
        if (sum1 != onePart) {
            i++;
            continue;
        }
        let j = i + 1;
        let sum2 = 0;
        while (j < len - 1) {
            sum2 += arr[j];
            if (sum2 != onePart) {
                j++;
                continue;
            }
            count++;
            j++;
        }
        i++;
    }
    return count;
}

function calculateSum(i: number, j: number, arr: number[]): number {
    let sum = 0;
    for (let k = i; k <= j; k++) {
        sum += arr[k];
    }
    return sum;
}

export { partitions };
