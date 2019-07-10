//Given an array, rotate the array to the right by k steps, where k is non-negative.
// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

let input = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

let rotateArray = (input, k) => {
  let counter = 0;
  while (counter < k) {
    let element = input.pop();
    input.unshift(element);
    counter++;
  }
  return input;
};

console.log(rotateArray(input, k));
