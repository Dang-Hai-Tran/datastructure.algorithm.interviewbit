function sortArray(nums: number[]): number[] {
    buildMaxHeap(nums);
    for (let i = nums.length - 1; i > 0; i--) {
        swap(nums, 0, i);
        maxHeapify(nums, i, 0);
    }
    return nums;
}

function buildMaxHeap(nums: number[]): void {
    const len = nums.length;
    const startIdx = Math.floor(len / 2) - 1;
    for (let i = startIdx; i >= 0; i--) {
        maxHeapify(nums, len, i);
    }
}

function maxHeapify(nums: number[], size: number, idx: number): void {
    let largest = idx;
    const left = 2 * idx + 1;
    const right = 2 * idx + 2;
    if (left < size && nums[left] > nums[largest]) {
        largest = left;
    }
    if (right < size && nums[right] > nums[largest]) {
        largest = right;
    }
    if (largest !== idx) {
        swap(nums, idx, largest);
        maxHeapify(nums, size, largest);
    }
}

function swap(nums: number[], i: number, j: number): void {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}

export { sortArray };
