// Naive time O(n) space O(n)
function removeDuplicates(nums: number[]): number {
    let setList = new Set(nums);
    nums.length = 0;
    nums.push(...setList.values());
    return setList.size;
}

// Better time O(n) space O(1)
function removeDuplicatesBetter(nums: number[]): number {
    let before = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[before] && i !== before) {
            nums[before + 1] = nums[i];
            before++;
        }
    }
    nums.length = before + 1;
    return before + 1;
}

export { removeDuplicates, removeDuplicatesBetter };
