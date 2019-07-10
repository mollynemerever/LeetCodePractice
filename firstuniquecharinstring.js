//Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

let s = "leetcode";

let firstUnique = s => {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]] += 1;
    } else {
      obj[s[i]] = 1;
    }
  }

  for (key in obj) {
    if (obj[key] === 1) {
      let index = s.indexOf(key);
      return index;
    }
  }
  return -1;
};
