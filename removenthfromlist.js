//Given a linked list, remove the n-th node from the end of list and return its head.
//Given linked list: 1->2->3->4->5, and n = 2.

//After removing the second node from the end, the linked list becomes 1->2->3->5.
//
// Definition for singly-linked list.
// * function ListNode(val) {
// *     this.val = val;
// *     this.next = null;
// * }

let removeNthFromEnd = (head, n) => {
  let slow = head;
  let fast = head;
  let i = 0;

  //get fast node n places ahead of slow
  while (i < n) {
    fast = fast.next;
    i++;
  }

  //fast is null, then head is n
  if (!fast) {
    head = head.next;
    return head;
  }

  //otherwise continue through linked list until fast is at end
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  //slow is now at nth node
  slow.next = slow.next.next;
  return head;
};
