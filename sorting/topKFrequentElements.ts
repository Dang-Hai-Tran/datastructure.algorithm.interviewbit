type Num = {
    value: number;
    count: number;
};
// Time O(n2) space O(n)
function topKFrequent(nums: number[], k: number): number[] {
    let lst: Num[] = [];
    for (let num of nums) {
        let index = lst.findIndex((obj) => obj.value === num);
        if (index != -1) {
            lst[index].count++;
        } else {
            lst.push({ value: num, count: 1 });
        }
    }
    lst.sort((a, b) => b.count - a.count);
    lst.length = k;
    let ret = lst.map((obj) => obj.value);
    return ret;
}

// Better approach time O(n) space O(n)
function topKFrequentBetter(nums: number[], k: number): number[] {
    let map = new Map<number, number>();
    for (let num of nums) {
        if (map.has(num) === true) {
            let count = map.get(num)!;
            map.set(num, count + 1);
        } else {
            map.set(num, 1);
        }
    }
    let keys = [...map.keys()];
    let counts = [...map.values()];
    let len = keys.length;
    let frequentArr: [number, number][] = new Array(len);
    for (let i = 0; i < len; i++) {
        frequentArr[i] = [keys[i], counts[i]];
    }
    frequentArr.sort((a, b) => b[1] - a[1]);
    frequentArr.length = k;
    return frequentArr.map((item) => item[0]);
}

export { topKFrequent, topKFrequentBetter };
