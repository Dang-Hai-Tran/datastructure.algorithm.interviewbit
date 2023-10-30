function validMountainArray(arr: number[]): boolean {
    let left = 0;
    let right = arr.length - 1;
    while (arr[left] < arr[left + 1] && left < arr.length) left++;
    while (arr[right] < arr[right - 1] && right > 0) right--;
    if (left === right && left !== 0 && right !== arr.length - 1) return true;
    return false;
}

export { validMountainArray };
