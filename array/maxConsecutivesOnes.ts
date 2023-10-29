function maxConsecutivesOnes(nums: number[]): number {
    let count = 0;
    let maxCount = 0;
    for (let left = 0; left < nums.length; left++) {
        if (nums[left] === 1) count++;
        if (nums[left] === 0) count = 0;
        if (count > maxCount) maxCount = count;
    }
    return maxCount;
}

export { maxConsecutivesOnes };
