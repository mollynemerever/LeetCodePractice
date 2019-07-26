//check if linkedlist is circular

function circular(head) {
  if (!head || !head.next) {
    return false;
  }
  let slow = head;
  let fast = head.next.next;

  while (fast && fast.next) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}
