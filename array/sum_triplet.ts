interface IIv {
    i: number;
    v: number;
}
function sumOfTriplet(A: number[]): number {
    let sum = 0;
    const n = A.length;

    const h: IIv[] = A.reduce(function (map: IIv[], obj: number, i: number) {
        map[i] = { i: i, v: obj };
        return map;
    }, []).sort((a, b) => b.v - a.v);

    let oldjv = h[n - 1].v;

    for (let k = 0; k < n; k++) {
        if (h[k].v <= sum / 3) break;

        if (h[k].i >= 2) {
            for (let j = k + 1; j < n; j++) {
                if (h[j].v * 2 - 1 <= oldjv + 1) break;
                if (h[j].v * 2 - 1 <= sum - h[k].v) break;

                if (h[j].i >= 1 && h[j].i < h[k].i) {
                    for (let i = j + 1; i < n; i++) {
                        if (h[i].i >= 0 && h[i].i < h[j].i) {
                            // console.log(h[k].v, h[j].v, h[i].v, h[k].v+ h[j].v+ h[i].v);
                            sum = Math.max(sum, h[k].v + h[j].v + h[i].v);
                            break;
                        }
                    }
                }

                oldjv = h[j].v;
            }
        }
    }

    return sum;
}

export { sumOfTriplet };
