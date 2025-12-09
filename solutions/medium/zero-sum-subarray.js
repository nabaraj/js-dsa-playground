/**
 * title: Zero Sum Subarray
 * difficulty: medium
 * tags: array
 * problem: Given an array of integers, find the length of the longest subarray with sum = 0.
 *
 * Fixes: use a Map to store first-seen prefix sum index.
 * Time: O(n). Space: O(n).
 * Test cases: Input: [1, -1, 3, 2, -2, -3, 3] → Output: 6 
 * Input: [4, 2, -3, 1, 6] → Output: 3 
 * Input: [1, 2, 3] → Output: 0
 */

function zeroSumSubarray(nums) {
    const firstIndex = new Map();

    let prefixSum = 0;
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if (prefixSum === 0) {
            maxLen = Math.max(maxLen, i + 1);
        }
        if (firstIndex.has(prefixSum)) {
            const prevIndex = firstIndex.get(prefixSum);
            const length = i - prevIndex;
            maxLen = Math.max(maxLen, length);
        } else {
            firstIndex.set(prefixSum, i);
        }
    }

    return maxLen;
}

console.log(zeroSumSubarray([1, -1, 3, 2, -2, -3, 3]))// → Output: 6
console.log(zeroSumSubarray([4, 2, -3, 1, 6]))// → Output: 3
console.log(zeroSumSubarray([1, 2, 3]))// → Output: 0