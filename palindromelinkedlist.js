//Given a singly linked list, determine if it is a palindrome.
//Input: 1->2
//Output: false

//Input: 1->2->2->1
//Output: true

let list = [1, 2, 1];

function isPalindrome(list) {
  let reverseArray = [];
  let origArray = [];
  let node = list;
  console.log("node", node);
  if (!node || !node.next) {
    return false;
  }

  while (node.next) {
    reverseArray.unshift(node.value);
    origArray.push(node.value);
    node = node.next;
  }
  console.log("orig", origArray);
  console.log("reverse", reverseArray);
  for (let i = 0; i < reverseArray.length; i++) {
    if (reverseArray[i] !== origArray[i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(list));
