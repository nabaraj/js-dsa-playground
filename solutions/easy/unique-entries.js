/**
 * title: Unique Numbers
 * difficulty: easy
 * tags: array, hash-map
 * problem: Given an array of numbers, return a new array that contains
 * only the unique values, in the order they first appeared.
 *
 * Test cases:
 * [1, 2, 2, 3, 1] → [1, 2, 3]
 * [4, 4, 4] → [4]
 * [] → []
 * [5, 3, 5, 7, 3, 9] → [5, 3, 7, 9]
 */
// solution
function uniqueNumbers(nums) {
  const tracker = new Set();
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (!tracker.has(element)) {
      tracker.add(element);
      result.push(element)
    }
  }
  return result;
}

console.log(uniqueNumbers([1, 2, 2, 3, 1]))
console.log(uniqueNumbers([4, 4, 4]))
console.log(uniqueNumbers([]))
console.log(uniqueNumbers([5, 3, 5, 7, 3, 9]))
