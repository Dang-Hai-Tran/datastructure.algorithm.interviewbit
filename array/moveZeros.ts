// Best approach time O(n) space 0(1)
function moveZeros(arr: number[]): void {
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[index], arr[i]] = [arr[i], arr[index]];
            index++;
        }
    }
}

export { moveZeros };
