function sortColors(nums: number[]): void {
    for (let i = 0; i < nums.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
}

let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(`sorted nums = ${nums}`);

export { sortColors };
