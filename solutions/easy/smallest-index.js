/**
 * title: Index of smallest no
 * difficulty: easy
 * tags: array
 * problem: Given a list of numbers, return the index of the smallest number in the list.
If the list is empty, return -1.
Test cases:

[3, 1, 2] → 1

[10, 5, 7, 2] → 3

[4, 4, 4] → 0

[] → -1
 */

// solution
function findSmallestIndex(nums) {
  if (nums.length === 0) return -1;
  let minNum = nums[0];
  let minIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (minNum > nums[i]) {
      minNum = nums[i];
      minIndex = i;
    }
  }
  return minIndex
}

console.log(findSmallestIndex([3, 1, 2]))
console.log(findSmallestIndex([10, 5, 7, 2]))
console.log(findSmallestIndex([4, 4, 4]))
console.log(findSmallestIndex([]))

