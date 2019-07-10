//Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Input: [4,1,2,1,2]
// Output: 4

let input = [2, 1, 2, 1, 7, 6, 7];

let singleNumber = array => {
  for (let i = 0; i < array.length; i++) {
    let temp = array.shift();
    if (array.indexOf(temp) === -1) {
      return temp;
    } else {
      array.push(temp);
    }
  }
};

// let singleNumber = array => {
//   let obj = {};
//   for (let i = 0; i < array.length; i++) {
//     if (obj[array[i]]) {
//       obj[array[i]] += 1;
//     } else {
//       obj[array[i]] = 1;
//     }
//   }
//
//   for (key in obj) {
//     if (obj[key] === 1) {
//       return key;
//     }
//   }
// };

console.log(singleNumber(input));
