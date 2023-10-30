// Naive approach time: 0(n2)
function removeElement(nums: number[], val: number): number {
    let len = nums.length;
    let count = len;
    for (let i = len - 1; i >= 0; i--) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            count--;
        }
    }
    return count;
}
// Better approach time: 0(n)
function removeElementBetter(nums: number[], val: number): number {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
}

export { removeElement, removeElementBetter };
