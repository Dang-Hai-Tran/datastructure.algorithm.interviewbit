// function flip(str: string): number[] {
//     let i = 0;
//     while (i <= str.length - 1 && str[i] === "1") {
//         i++;
//     }
//     if (i === str.length) {
//         return [];
//     }
//     let maxOne = 0;
//     let maxI = 0;
//     let maxJ = 0;
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i; j < str.length; j++) {
//             let countOne = 0;
//             for (let k = 0; k < str.length; k++) {
//                 if ((k < i || k > j) && str[k] === "1") countOne++;
//                 if (k >= i && k <= j && str[k] === "0") countOne++;
//             }
//             if (countOne > maxOne) {
//                 [maxOne, maxI, maxJ] = [countOne, i, j];
//             }
//         }
//     }
//     return [maxI + 1, maxJ + 1];
// }

function flip(A: string): number[] {
    let rl = 0,
        rr = 0,
        rdmax = 0;
    let l = -1;
    let r = -1;
    let d = 0;
    let dmax = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === "1") d--;
        else d++;
        if (d <= -1) {
            l = -1;
            r = -1;
            d = 0;
            continue;
        }
        if (l === -1) l = i;
        if (dmax < d) {
            r = i;
            dmax = d;
        }
        if (dmax > rdmax) {
            rl = l;
            rr = r;
            rdmax = dmax;
        }
    }
    if (!rdmax) return [];
    return [rl + 1, rr + 1];
}

export { flip };
