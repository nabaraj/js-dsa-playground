/**
 * title: Find the Maximum Number in an Array
 * difficulty: easy
 * tags: array
 * problem: Write a function that returns the largest number in a given array of integers.

 * function findMax(nums) {}
Test cases

js
Copy code
console.log(findMax([1, 2, 3, 4, 5]));      // Expected: 5
console.log(findMax([-10, -3, -20]));       // Expected: -3
console.log(findMax([9]));                  // Expected: 9
console.log(findMax([7, 7, 7]));            // Expected: 7

 */
function findMax(nums) {
    // return Math.max(...nums);
    let maxValue = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (maxValue < nums[i]) maxValue = nums[i]
    }
    return maxValue;
}

console.log(findMax([1, 2, 3, 4, 5]));      // Expected: 5
console.log(findMax([-10, -3, -20]));       // Expected: -3
console.log(findMax([9]));                  // Expected: 9
console.log(findMax([7, 7, 7]));            // Expected: 7