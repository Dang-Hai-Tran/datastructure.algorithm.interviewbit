// Using sort() method of array time O(nlogn) space O(1)
function findKthLargest(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    return nums[nums.length - k];
}

export { findKthLargest };
