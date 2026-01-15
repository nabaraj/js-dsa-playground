/**
 * title: First element that appears more than once
 * difficulty: Medium
 * tags: array, hashmap, set
 *
 * problem:
 * Given an array of integers nums, find the first element
 * that appears more than once.
 * Order matters. Return the element whose second occurrence
 * appears first.
 *
 * If no duplicates exist, return -1.
 */

function firstDuplicateElement(nums) {
    const seen = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return nums[i];
        }
        seen.add(nums[i]);
    }

    return -1;
}

// verify
console.log(firstDuplicateElement([2, 1, 3, 5, 3, 2])); // 3
console.log(firstDuplicateElement([1, 2, 3, 4]));     // -1
console.log(firstDuplicateElement([5, 5, 1, 2]));     // 5
console.log(firstDuplicateElement([]));               // -1