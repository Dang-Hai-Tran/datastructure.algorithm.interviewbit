function mergeOverlapInterval(intervals: number[][]): number[][] {
    if (intervals.length <= 1) return intervals;
    for (let i = 0; i < intervals.length; i++) {
        intervals[i] = sortedInterval(intervals[i]);
    }
    intervals.sort((a: number[], b: number[]) => {
        if (a[0] != b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });
    let ret: number[][] = [];
    for (let i = 0; i < intervals.length - 1; i++) {
        let merge = mergeTwoInterval(intervals[i], intervals[i + 1]);
        if (merge[1] == false) {
            ret.push(merge[0]);
        } else {
            intervals[i + 1] = merge[0];
        }
        if (i === intervals.length - 2) ret.push(intervals[i + 1]);
    }
    return ret;
}

function mergeTwoInterval(interval: number[], newInterval: number[]): [number[], boolean] {
    if (Math.max(interval[0], newInterval[0]) > Math.min(interval[1], newInterval[1])) {
        return [interval, false];
    }
    let first = Math.min(interval[0], newInterval[0]);
    let second = Math.max(interval[1], newInterval[1]);
    return [[first, second], true];
}

function sortedInterval(interval: number[]): number[] {
    if (interval[0] > interval[1]) {
        [interval[0], interval[1]] = [interval[1], interval[0]];
    }
    return interval;
}

export { mergeOverlapInterval };
