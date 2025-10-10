/**
 * title: Find the Missing Number
 * difficulty: easy
 * tags: array
 * problem: You are given an array containing n distinct numbers taken from the range 0 to n. Find the one number missing from the array.

 * Example Test Cases:

 * Input: [3, 0, 1]
 * Output: 2

 * Input: [0, 1]
 * Output: 2

 * Input: [9,6,4,2,3,5,7,0,1]
 * Output: 8


 * Note: Don’t use extra space greater than O(1).
 */
function findMissingNumber(nums) {
    const total = nums.length * (nums.length + 1) / 2; // need to remember this logic
    const actualTotal = nums.reduce((total, num) => total + num, 0)
    return total - actualTotal
}
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
console.log(findMissingNumber([0, 1]))
console.log(findMissingNumber([3, 0, 1]))