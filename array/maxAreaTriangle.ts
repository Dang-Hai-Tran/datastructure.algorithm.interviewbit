// Naive approach
interface Coordinate {
    x: number;
    y: number;
}
function maxAreaTriangle(arr: string[]): number {
    let arrOfR: Coordinate[] = [];
    let arrOfG: Coordinate[] = [];
    let arrOfB: Coordinate[] = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === "r") {
                arrOfR.push({ x: j, y: i });
            }
            if (arr[i][j] === "g") {
                arrOfG.push({ x: j, y: i });
            }
            if (arr[i][j] === "b") {
                arrOfB.push({ x: j, y: i });
            }
        }
    }
    let maxArea = 0;
    for (let pointR of arrOfR) {
        for (let pointG of arrOfG) {
            for (let pointB of arrOfB) {
                let area = 0;
                if (pointR.x === pointG.x) {
                    area = Math.ceil((Math.abs(pointR.y - pointG.y) * Math.abs(pointB.x - pointR.x)) / 2);
                    maxArea = Math.max(maxArea, area);
                } else if (pointR.x === pointB.x) {
                    area = Math.ceil((Math.abs(pointR.y - pointB.y) * Math.abs(pointG.x - pointR.x)) / 2);
                    maxArea = Math.max(maxArea, area);
                } else if (pointR.y === pointG.y) {
                    area = Math.ceil((Math.abs(pointR.x - pointG.x) * Math.abs(pointB.y - pointR.y)) / 2);
                    maxArea = Math.max(maxArea, area);
                } else if (pointR.y === pointB.y) {
                    area = Math.ceil((Math.abs(pointR.x - pointB.x) * Math.abs(pointG.y - pointR.y)) / 2);
                    maxArea = Math.max(maxArea, area);
                } else if (pointB.x === pointG.x) {
                    area = Math.ceil((Math.abs(pointB.y - pointG.y) * Math.abs(pointR.x - pointB.x)) / 2);
                    maxArea = Math.max(maxArea, area);
                } else if (pointB.y === pointG.y) {
                    area = Math.ceil((Math.abs(pointB.x - pointG.x) * Math.abs(pointR.y - pointB.y)) / 2);
                    maxArea = Math.max(maxArea, area);
                }
            }
        }
    }
    return maxArea;
}

export { maxAreaTriangle };
