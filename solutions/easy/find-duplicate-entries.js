/**
 * title: Find duplicates
 * difficulty: Easy
 * tags: array, hash-set
 *
 * Problem:
 * Given an array of integers nums, return true if any value appears
 * at least twice in the array. Return false if every element is distinct.
 *
 * Constraints
 * 1 ≤ nums.length ≤ 10^5
 * -10^9 ≤ nums[i] ≤ 10^9
 */

function findDuplicateEntries(arr) {
    return new Set(arr).size !== arr.length;
}

console.log(findDuplicateEntries([1, 2, 3, 1]));
console.log(findDuplicateEntries([1, 2, 3, 4]));
console.log(findDuplicateEntries([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(findDuplicateEntries([]));