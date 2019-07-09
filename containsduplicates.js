//Given an array of integers, find if the array contains any duplicates.
//Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

//Input: [1,2,3,1]
//Output: true

let array = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

let containsDuplicates = array => {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (array.indexOf(element, i + 1) !== -1) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicates(array));
