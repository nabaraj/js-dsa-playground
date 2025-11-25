/**
 * title: Count how many times a target number appears in an array
 * difficulty: easy
 * tags: array
 * problem: function countOccurrences(nums, target) {}


Test cases

console.log(countOccurrences([1, 2, 2, 3, 2], 2));   // Expected: 3
console.log(countOccurrences([5, 5, 5, 5], 5));      // Expected: 4
console.log(countOccurrences([1, 2, 3], 4));         // Expected: 0
console.log(countOccurrences([], 10));               // Expected: 0
console.log(countOccurrences([9], 9));               // Expected: 1
//  */

// solution
function countOccurrences(nums, target) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) total++
  }
  return total;
}


console.log(countOccurrences([1, 2, 2, 3, 2], 2));   // Expected: 3
console.log(countOccurrences([5, 5, 5, 5], 5));      // Expected: 4
console.log(countOccurrences([1, 2, 3], 4));         // Expected: 0
console.log(countOccurrences([], 10));               // Expected: 0
console.log(countOccurrences([9], 9));               // Expected: 1