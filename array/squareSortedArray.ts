// Naive approach : O(n logn)
function sortedSquares(nums: number[]): number[] {
    let squared = nums.map((e) => e * e);
    squared.sort((a, b) => a - b);
    return squared;
}

// Better approach : O(n)
function sortedSquaresBetter(nums: number[]): number[] {
    let length = nums.length;
    let squared = Array(length);
    let left = 0;
    let right = length - 1;
    for (let i = length - 1; i >= 0; i--) {
        if (nums[left] ** 2 > nums[right] ** 2) {
            squared[i] = nums[left] ** 2;
            left++;
        } else {
            squared[i] = nums[right] ** 2;
            right--;
        }
    }
    return squared;
}

export { sortedSquares, sortedSquaresBetter };
