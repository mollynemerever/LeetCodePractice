//Given two strings s and t , write a function to determine if t is an anagram of s.

let validAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  let sObj = {};
  for (let i = 0; i < s.length; i++) {
    if (sObj[s[i]]) {
      sObj[s[i]] += 1;
    } else {
      sObj[s[i]] = 1;
    }
  }
  let tObj = {};
  for (let i = 0; i < t.length; i++) {
    if (tObj[t[i]]) {
      tObj[t[i]] += 1;
    } else {
      tObj[t[i]] = 1;
    }
  }

  for (key in sObj) {
    if (sObj[key] !== tObj[key] || !tObj[key]) {
      return false;
    }
  }
  return true;
};
