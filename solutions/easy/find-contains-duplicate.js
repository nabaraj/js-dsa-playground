/**
 * Title: Contains Duplicate
 * Difficulty: Easy
 * Tags: array, hash-map
 *
 * Problem:
 * Given an array of integers nums, return true if any value appears
 * at least twice in the array. Return false if every element is unique.
 *
 * Examples:
 * Input: [1, 2, 3, 1]
 * Output: true
 *
 * Input: [1, 2, 3, 4]
 * Output: false
 *
 * Input: [0, 0]
 * Output: true
 *
 * Input: []
 * Output: false
 */


// solution
function findDuplicate(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map.has(num)) return true;
        else {
            map.set(num, 1)
        }
    }
    return false;
}

console.log(findDuplicate([1, 2, 3, 1]))
console.log(findDuplicate([1, 2, 3, 4]))
console.log(findDuplicate([0, 0]))
console.log(findDuplicate([]))