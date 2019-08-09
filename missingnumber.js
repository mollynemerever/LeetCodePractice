let input = [0, 1, 2, 4];

var missingNumber = function(nums) {
  let total = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    total += i + 1; //index
  }
  let missing = total - sum;
  return missing;
};

console.log(missingNumber(input));

//missing number = (sum of all numbers 0 to n) - (sum of all numbers in array)

//total represents the sum of what the array should be if all numbers present
//essentially each number has the value of its index position +1

//finding the difference between what the total of all numbers would be
//and what the sum of all numbers actually is
//will give you the missing number
