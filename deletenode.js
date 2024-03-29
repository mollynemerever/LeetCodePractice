//Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

// Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }

let deleteNode = node => {
  node.val = node.next.val;
  node.next = node.next.next;
};
