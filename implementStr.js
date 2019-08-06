//Input: haystack = "hello", needle = "ll"
//Output: 2

let haystack = "hello";
let needle = "llo";

// function implementStr(haystack, needle) {
//  if (needle === "" || haystack.length !== needle.length) {
//return 0;
//} else {
//return haystack.indexOf(needle);
//}
//
// }

function implementStr(haystack, needle) {
  if (needle === "" || haystack.length < needle.length) {
    return 0;
  }
  //split string into array so we can utilize slice later on
  let haystackArray = haystack.split("");
  //loop through haystackArray
  //looking to see if element is equal to first char in 'needle'
  //if we find matching first chars:
  //do the following chars in haystackArray === needle?
  //then return the current index, otherwise return -1
  for (let i = 0; i < haystackArray.length; i++) {
    //slice the array in order to preserve original array
    //join the new array to get a string
    if (haystackArray.slice(i, needle.length + i).join("") === needle) {
      return i;
    }
  }
  return -1;
}

console.log(implementStr(haystack, needle));
