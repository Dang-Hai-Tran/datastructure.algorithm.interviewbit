// Time O(n logn), space O(n)
type Num = {
    value: string;
    index: number;
};
function smallestTrimmedNumbers(nums: string[], queries: number[][]): number[] {
    let out = [];
    for (let query of queries) {
        let trimmedNums: Num[] = nums.map(function (value, index) {
            let trimmedStr = trimmedString(value, query[1]);
            let num: Num = { value: trimmedStr, index: index };
            return num;
        });
        let sortedTrimmedNums = [...trimmedNums].sort(function (a, b) {
            for (let i = 0; i < a.value.length; i++) {
                if (a.value[i] !== b.value[i]) {
                    return Number(a.value[i]) - Number(b.value[i]);
                }
            }
            return 0;
        });
        let returnIndex = sortedTrimmedNums[query[0] - 1].index;
        out.push(returnIndex);
    }
    return out;
}

function trimmedString(str: string, k: number): string {
    if (k >= str.length) return str;
    let newString = str.substring(str.length - k);
    return newString;
}

export { smallestTrimmedNumbers };
