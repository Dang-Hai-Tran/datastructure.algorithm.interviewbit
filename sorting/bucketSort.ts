function bucketSort(lst: number[], K: number) {
    let buckets: number[][] = new Array(K);
    for (let i = 0; i < K; i++) {
        buckets[i] = [];
    }
    let maxElem = Math.max(...lst);
    for (let i = 0; i < lst.length; i++) {
        let index = Math.floor((K * lst[i]) / maxElem);
        if (index === K) {
            buckets[index - 1].push(lst[i]);
        } else {
            buckets[index].push(lst[i]);
        }
    }
    for (let i = 0; i < K; i++) {
        buckets[i].sort((a, b) => a - b);
    }
    let sortedLst = [];
    for (let bucket of buckets) {
        sortedLst.push(...bucket);
    }
    return sortedLst;
}

export { bucketSort };
