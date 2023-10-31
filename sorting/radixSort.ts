function radixSort(lst: number[]): void {
    let shift = Math.min(...lst);
    for (let i = 0; i < lst.length; i++) {
        lst[i] -= shift;
    }
    let maxElem = Math.max(...lst);
    let placeVal = 1;
    while (placeVal <= maxElem) {
        countingSort(lst, placeVal);
        placeVal *= 10;
    }
    for (let i = 0; i < lst.length; i++) {
        lst[i] += shift;
    }
}

function countingSort(lst: number[], placeVal: number, K: number = 10) {
    let counts = new Array(K).fill(0);
    for (let elem of lst) {
        let digit = Math.floor(elem / placeVal) % 10;
        counts[digit]++;
    }
    let startingIndex = 0;
    for (let i = 0; i < counts.length; i++) {
        let count = counts[i];
        counts[i] = startingIndex;
        startingIndex += count;
    }
    let sortedLst = new Array(lst.length).fill(0);
    for (let elem of lst) {
        let digit = Math.floor(elem / placeVal) % 10;
        sortedLst[counts[digit]] = elem;
        counts[digit]++;
    }
    for (let i = 0; i < lst.length; i++) {
        lst[i] = sortedLst[i];
    }
}

export { radixSort };
