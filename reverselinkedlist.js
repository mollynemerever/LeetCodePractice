//Reverse a singly linked list.
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }

let reverseLinkedList = input => {
  let node = head;
  let previous = null;

  while (node) {
    let temp = node.next;

    node.next = previous;
    previous = node;
    node = temp;
  }
  return previous;
};
