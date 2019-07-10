//Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Input: "A man, a plan, a canal: Panama"
// Output: true

let input = "A man, a plan, a canal: Panama";

let validPalindrome = input => {
  let noSpace = input.replace(/\W/g, "").toLowerCase();
  let front = 0;
  let back = noSpace.length - 1;
  console.log(noSpace);
  console.log(noSpace.charAt(back));

  while (front < back) {
    if (noSpace.charAt(front) !== noSpace.charAt(back)) {
      return false;
    }
    front++;
    back--;
  }
  return true;
};

console.log(validPalindrome(input));
