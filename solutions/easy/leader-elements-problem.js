/**
 * title: Leader Elements Problem
 * difficulty: easy
 * tags: array
 * problem:
Given an array of numbers, return the count of elements that are strictly greater than all elements to their right.

Test cases:

Input: [1, 2, 3, 4] → Output: 1

Input: [4, 3, 2, 1] → Output: 4

Input: [5, 1, 2, 9, 0] → Output: 2

Input: [] → Output: 0
 */

// solution
function leaderElementProblem(nums) {
  let total = 0;
  let maxRight = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (nums[i] > maxRight) {
      total++;
      maxRight = nums[i]
    }

  }
  return total;
}
console.log(leaderElementProblem([1, 2, 3, 4]))
console.log(leaderElementProblem([4, 3, 2, 1]))
console.log(leaderElementProblem([5, 1, 2, 9, 0]))
console.log(leaderElementProblem([]))

