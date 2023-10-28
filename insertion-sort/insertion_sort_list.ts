class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function insertionSortList(head: ListNode | null): ListNode | null {
    let sortedList: ListNode | null = null;
    let current: ListNode | null = head;
    while (current != null) {
        let next: ListNode | null = current.next;
        sortedList = insertNode(sortedList, current);
        current = next;
    }
    return sortedList;
}

function insertNode(head: ListNode | null, node: ListNode): ListNode {
    if (!head || node.val < head.val) {
        node.next = head;
        return node;
    }
    let current = head;
    while (current.next && node.val > current.next.val) {
        current = current.next;
    }
    node.next = current.next;
    current.next = node;
    return head;
}

function arrayToList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    let head: ListNode = new ListNode(arr[0]);
    let prev = head;
    for (let i = 1; i < arr.length; i++) {
        let tmp = new ListNode(arr[i]);
        prev.next = tmp;
        prev = tmp;
    }
    return head;
}

function listToArray(head: ListNode | null): number[] {
    if (head == null) return [];
    let tmp: ListNode | null = head;
    let ret: number[] = [];
    while (tmp != null) {
        ret.push(tmp.val);
        tmp = tmp.next;
    }
    return ret;
}

function main() {
    let unsortedArr = [4, 2, 1, 3];
    let unsortedList = arrayToList(unsortedArr);
    let sortedList = insertionSortList(unsortedList);
    let sortedArr = listToArray(sortedList);
    console.log(`Sorted arr = ${sortedArr}`);
}

main();
