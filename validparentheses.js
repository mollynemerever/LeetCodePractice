//Example 1:

// Input: "()"
// Output: true
// Example 2:
//
// Input: "()[]{}"
// Output: true
// Example 3:
//
// Input: "(]"
// Output: false

let input = "({]})";

function validParenthese(s) {
  let obj = {
    "[": "]",
    "{": "}",
    "(": ")"
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === obj[stack[stack.length - 1]]) {
      stack.pop(); //found a match
    } else {
      stack.push(s[i]);
    }
  }

  if (stack.length !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(validParenthese(input));
