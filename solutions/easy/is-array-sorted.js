/**
 * title: array is sorted
 * difficulty: easy
 * tags: array, every
 * problem: Check if an array is sorted in non‑decreasing order
function isSorted(nums) {}


Test cases

console.log(isSorted([1, 2, 3, 4]));       // Expected: true
console.log(isSorted([1, 1, 2, 5]));       // Expected: true
console.log(isSorted([3, 2, 1]));          // Expected: false
console.log(isSorted([]));                 // Expected: true
console.log(isSorted([10]));               // Expected: true
//  */

// solution
function isSorted(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) return false;
  }
  return true;
}

// sort version
const isSortedEvery = (arr) => arr.length < 2 || arr.every((value, index) => value === 0 || value > arr[index - 1])

console.log(isSorted([1, 2, 3, 4]));       // Expected: true
console.log(isSorted([1, 1, 2, 5]));       // Expected: true
console.log(isSorted([3, 2, 1]));          // Expected: false
console.log(isSorted([]));                 // Expected: true
console.log(isSorted([10]));               // Expected: true