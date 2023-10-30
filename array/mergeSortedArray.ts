// Naive approach
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = 0;
    let j = 0;
    let brr = [];
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            brr.push(nums1[i]);
            i++;
        } else {
            brr.push(nums2[j]);
            j++;
        }
    }
    while (i < m) {
        brr.push(nums1[i]);
        i++;
    }
    while (j < n) {
        brr.push(nums2[j]);
        j++;
    }
    for (let i = 0; i < m + n; i++) {
        nums1[i] = brr[i];
    }
}
// Better approach
function mergeBetter(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = m + n - 1; i >= 0; i--) {
        if (p1 >= 0 && p2 >= 0) {
            nums1[i] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];
        } else {
            nums1[i] = p1 >= 0 ? nums1[p1--] : nums2[p2--];
        }
    }
}

export { merge, mergeBetter };
