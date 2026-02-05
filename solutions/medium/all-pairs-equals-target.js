/**
/**
 * title: all pairs of indices equal to target
 * difficulty: medium
 * tags: array, map, two-sum
 *
 * problem:
 * Given an array of integers nums, return all pairs of indices [i, j]
 * such that nums[i] + nums[j] === target and i < j.
 

Return an empty array if no pairs exist.

Input: nums = [2, 7, 11, 15], target = 9
Output: [[0, 1]]

Input: nums = [1, 2, 3, 4, 3], target = 6
Output: [[1, 3], [2, 4]]

Input: nums = [1, 1, 1], target = 3
Output: []

Input: nums = [], target = 5
Output: []


 */

function pairsEqualTarget(arr, tar) {

    const pair = [];
    for (let i = 0; i < arr.length; i++) {
        const number = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            const number2 = arr[j];
            if (number + number2 === tar) {
                pair.push([i, j]);
            }
        }
    }
    return pair;
}

console.log(pairsEqualTarget([2, 7, 11, 15], 9))
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [[0, 1]]

// Input: nums = [1, 2, 3, 4, 3], target = 6
// Output: [[1, 3], [2, 4]]

// Input: nums = [1, 1, 1], target = 3
// Output: []

// Input: nums = [], target = 5
// Output: []
