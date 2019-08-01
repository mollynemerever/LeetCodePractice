let nums = [0, 0, 1];

function moveZeroes(nums) {
  let counter = 0;
  let add = 0;
  while (nums.indexOf(0) !== -1) {
    nums.splice(nums.indexOf(0), 1);
    counter++;
  }

  while (add < counter) {
    nums.push(0);
    add++;
  }
  return nums;
}

console.log(moveZeroes(nums));
