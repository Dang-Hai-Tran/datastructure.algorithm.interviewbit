function mergeIntervals(intervals: number[][], newInterval: number[]): number[][] {
    if (intervals.length === 0) return [newInterval];
    newInterval = sortedInterval(newInterval);
    let ret: number[][] = [];
    let pushNewInterval = false;
    for (let i = 0; i < intervals.length; i++) {
        intervals[i] = sortedInterval(intervals[i]);
        let merge = merTwoInterval(intervals[i], newInterval);
        if (merge[1] == false) {
            if (intervals[i][1] < newInterval[0]) {
                ret.push(merge[0]);
                if (i === intervals.length - 1) ret.push(newInterval);
            }
            if (intervals[i][0] > newInterval[1]) {
                if (pushNewInterval == false) {
                    ret.push(newInterval);
                    pushNewInterval = true;
                }
                ret.push(merge[0]);
            }
        }
        if (merge[1] == true) {
            newInterval = merge[0];
            if (i === intervals.length - 1) ret.push(newInterval);
        }
    }
    return ret;
}

function merTwoInterval(interval: number[], newInterval: number[]): [number[], boolean] {
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

export { mergeIntervals };
