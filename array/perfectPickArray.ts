function perfectPeakArray(arr: number[]): number {
    let arrMinRight = updateArrMinRight(arr, 1);
    let arrMaxLeft = arr[0];
    for (let i = 1; i < arr.length - 1; i++) {
        arrMaxLeft = Math.max(arrMaxLeft, arr[i - 1]);
        if (arr[i] === arrMinRight) {
            arrMinRight = updateArrMinRight(arr, i);
        }
        if (arr[i] > arrMaxLeft && arr[i] < arrMinRight) return 1;
    }
    return 0;
}

function updateArrMinRight(arr: number[], i: number): number {
    let arrMinRight = arr[i + 1];
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arrMinRight) arrMinRight = arr[j];
    }
    return arrMinRight;
}

export { perfectPeakArray };
