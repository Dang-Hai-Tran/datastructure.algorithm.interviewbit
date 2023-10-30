function heightChecker(heights: number[]): number {
    let copy: number[] = Array.from(heights);
    copy.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < copy.length; i++) {
        if (copy[i] != heights[i]) count++;
    }
    return count;
}

export { heightChecker };
