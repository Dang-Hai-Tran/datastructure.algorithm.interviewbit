// Time O(n) space O(n)
function findDisappearedNumbers(nums: number[]): number[] {
    let brr = new Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 1 && nums[i] <= nums.length) brr[nums[i] - 1]++;
    }
    let crr = [];
    for (let i = 0; i < brr.length; i++) {
        if (brr[i] === 0) crr.push(i + 1);
    }
    return crr;
}

export { findDisappearedNumbers };
