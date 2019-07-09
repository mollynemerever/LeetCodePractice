//Write a function that reverses a string. The input string is given as an array of characters char[].
//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//Input: ["h","e","l","l","o"]
//Output: ["o","l","l","e","h"]

let str = ["h", "e", "l", "l", "o"];

let reverseMe = str => {
  let length = str.length - 1;
  for (let i = 0; i < length; i++) {
    let element = str[i + 1];

    str.splice(i + 1, 1);
    str.unshift(element);
  }
  return str;
};

// let reverseString = str => {
//   return str.reverse();
// };

//console.log(reverseString(str));

console.log(reverseMe(str));
