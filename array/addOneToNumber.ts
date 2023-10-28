function addOneToNumber(arr: number[]): number[] {
    let carry = 1; // Initialize the carry as 1
    const result: number[] = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        const sum = arr[i] + carry;
        result.unshift(sum % 10); // Add the remainder to the result array
        carry = Math.floor(sum / 10); // Update the carry
    }

    if (carry > 0) {
        result.unshift(carry); // If there is still a carry after going through all digits, add it to the result array
    }
    while (result.at(0) == 0) {
        result.shift();
    }

    return result;
}

export { addOneToNumber };
