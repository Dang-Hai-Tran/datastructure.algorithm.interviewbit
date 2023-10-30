// Using the 3 pointers technique
// Time O(n) space O(1)
function thirdMax(nums: number[]): number {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            third = second;
            second = first;
            first = nums[i];
        } else if (nums[i] > second && nums[i] != first) {
            third = second;
            second = nums[i];
        } else if (nums[i] > third && nums[i] != first && nums[i] != second) third = nums[i];
    }
    return third !== -Infinity ? third : first;
}

export { thirdMax };
