function checkIfExist(arr: number[]): boolean {
    let map: Map<number, number> = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if (map.has(arr[i] / 2) && i != map.get(arr[i] / 2)) {
                // console.log(arr[i]);
                return true;
            }
        }
    }
    return false;
}

export { checkIfExist };
