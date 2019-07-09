// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Given nums = [1,1,2],
//
// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
//
// It doesn't matter what you leave beyond the returned length.

// Given nums = [0,0,1,1,1,2,2,3,3,4],
//
// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

let removeDuplicates = nums => {
  for (let i = 0; i < nums.length; ) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
    } else {
      i++;
    }
  }
  console.log(nums);
  return nums.length;
};

console.log(removeDuplicates(nums));

//because array is already sorted, duplicates will appear next to each other
//check if current matches the item in the next index
//if so, remove the next element, items will shift up and then carry on
