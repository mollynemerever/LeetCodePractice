//Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
//The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
//You may assume the integer does not contain any leading zero, except the number 0 itself.

//Input: [1,2,3]
//Output: [1,2,4]
//Explanation: The array represents the integer 123.

let digits = [1, 9, 6];
//let digits = [9];

function plusOne(digits) {
  let last = digits[digits.length - 1];
  if (last === 9 && digits.length === 1) {
    digits = [1, 0];
  } else if (last === 9) {
    digits[digits.length - 1] = 0;
    for (let i = digits.length - 2; i >= 0; i--) {
      if (digits[i] !== 9) {
        digits[i] = digits[i] + 1;
        return digits;
      }
      if ((i === 0) & (digits[i] === 9)) {
        digits[i] = 1;
        digits.push(0);
        return digits;
      }
      digits[i] = 0;
    }
  } else {
    digits[digits.length - 1] = last + 1;
  }

  return digits;
}

console.log(plusOne(digits));
