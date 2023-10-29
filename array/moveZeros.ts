// Naive approach
function moveZeros(arr: number[]) {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index] = arr[i];
            index++;
        }
    }
    for (let i = index; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}

export { moveZeros };
