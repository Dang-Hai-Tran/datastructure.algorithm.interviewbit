// Sort using the two-pointer technique.
// Time O(n) space O(1)
function sortArrayByParity(nums: number[]): number[] {
    let writePointer = 0;
    for (let readPointer = 0; readPointer < nums.length; readPointer++) {
        if (nums[readPointer] % 2 === 0) {
            [nums[readPointer], nums[writePointer]] = [nums[writePointer], nums[readPointer]];
            writePointer++;
        }
    }
    return nums;
}

export { sortArrayByParity };
