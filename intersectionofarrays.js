//Given two arrays, write a function to compute their intersection.
//Input: nums1 = [1,2,2,1], nums2 = [2,2]
//Output: [2,2]
//Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
//Output: [4,9]

let array1 = [4, 4, 5];
let array2 = [9, 4, 9, 8, 4];

function intersection(array1, array2) {
  let intersections = [];
  for (let i = 0; i < array1.length; i++) {
    let element = array1[i];
    if (array2.indexOf(element) !== -1) {
      intersections.push(element);
      array2.splice(array2.indexOf(element), 1);
    }
  }
  return intersections;
}

console.log(intersection(array1, array2));
