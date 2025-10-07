/**
 * title: Move Zeros
 * difficulty: easy
 * tags: array
 * problem: Write a function moveZeros(nums) that moves all the zeros in an array to the end without changing the order of non‑zero elements.
 */

// solution
function moveZeros(nums) {
  let insertPos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) nums[insertPos++] = nums[i];
  }
  while (insertPos < nums.length) {
    nums[insertPos++] = 0;
  }
  return nums;
  }
  console.log(moveZeros([0, 1, 0, 3, 12]));
  console.log(moveZeros([0, 0, 1]));
  module.exports = moveZeros;
  