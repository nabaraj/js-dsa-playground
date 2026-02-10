/**
 * title: Length of the Shortest Unsorted Continuous Subarray
 * difficulty: Hard
 * tags: Array, Two Pointers, Greedy
 *
 * Problem:
 * Given an integer array nums, return the length of the shortest continuous
 * subarray such that sorting only this subarray makes the entire array
 * sorted in ascending order.
 *
 * If the array is already sorted, return 0.
 *
 * Approach (O(n) time, O(1) space):
 * 1. Scan from left to find the first index where the order breaks.
 * 2. Scan from right to find the first index where the order breaks.
 * 3. Find the minimum and maximum values inside this subarray.
 * 4. Expand the left boundary if elements before it are greater than min.
 * 5. Expand the right boundary if elements after it are smaller than max.
 * 6. The answer is (right - left + 1).
 *
 * Test Cases:
 * Input:  [2, 6, 4, 8, 10, 9, 15]
 * Output: 5
 *
 * Input:  [1, 2, 3, 4]
 * Output: 0
 *
 * Input:  [1]
 * Output: 0
 *
 * Input:  [1, 3, 2, 2, 2]
 * Output: 4
 */


function shortestUnsortedSubArray(nums) {
    const n = nums.length;
    if (n <= 1) return 0;

    let left = 0;
    let right = n - 1;

    while (left < n - 1 && nums[left] <= nums[left + 1]) {
        left++;
    }

    if (left === n - 1) return 0;


    while (right > 0 && nums[right] >= nums[right - 1]) {
        right--;
    }

    let subMin = Infinity;
    let subMax = -Infinity;

    for (let i = left; i <= right; i++) {
        subMin = Math.min(subMin, nums[i]);
        subMax = Math.max(subMax, nums[i]);
    }

    while (left > 0 && nums[left - 1] > subMin) {
        left--;
    }

    while (right < n - 1 && nums[right + 1] < subMax) {
        right++;
    }

    return right - left + 1;
}

console.log(shortestUnsortedSubArray([2, 6, 4, 8, 10, 9, 15]));
console.log(shortestUnsortedSubArray([1, 2, 3, 4]));
console.log(shortestUnsortedSubArray([1]));
console.log(shortestUnsortedSubArray([1, 3, 2, 2, 2]));
