// Naive approach
function findNumbers(nums: number[]): number {
    let count = 0;
    for (let item of nums) {
        if (String(item).length % 2 === 0) count++;
    }
    return count;
}

export { findNumbers };
