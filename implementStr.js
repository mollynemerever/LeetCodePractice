//Input: haystack = "hello", needle = "ll"
//Output: 2

let haystack = "helix";
let needle = "ll";

// function implementStr(haystack, needle) {
//   return haystack.indexOf(needle);
// }

function implementStr(haystack, needle) {
  let haystackArray = haystack.split("");

  for (let i = 0; i < haystackArray.length; i++) {
    if (haystackArray.slice(i, needle.length + i).join("") === needle) {
      //first char matches

      return i;
    }
  }
  return -1;
}

console.log(implementStr(haystack, needle));
