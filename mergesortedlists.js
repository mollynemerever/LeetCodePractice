//Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

/*
      DUMMY HEADS ARE VERY HELPFUL FOR LINKED LIST PROBLEMS. Probably the biggest tip
      I can give for doing linked list problems. They help us avoid the empty state
      case and we can just immediately get to building our new list without worrying
      about it having no nodes yet
    */

//Input: 1->2->4, 1->3->4
//Output: 1->1->2->3->4->4

// Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }

function mergeLists(list1, list2) {
  let dummyHead = new ListNode(null);
  let current = dummyHead;

  //while both linked lists are not empty
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      current = current.next;
      list1 = list1.next;
    } else {
      current.next = list2;
      current = current.next;
      list2 = list2.next;
    }
  }

  if (list1) {
    current.next = list1;
  }

  if (list2) {
    current.next = list2;
  }

  return dummyHead.next;
}
