/**
 * Title: Maximum Sum of Subarray of Size K
 * Difficulty: Medium
 * Tags: Array, Sliding Window
 *
 * Problem:
 * Given an array of integers and a number k,
 * find the maximum sum of any contiguous subarray of size k.
 *
 * A subarray is a continuous part of the array.
 *
 * If k is greater than the array length, return null.
 *
 * Example:
 * Input: nums = [2, 1, 5, 1, 3, 2], k = 3
 * Output: 9
 * Explanation: Subarray [5, 1, 3] has the maximum sum.
 *
 * Input: nums = [2, 3, 4, 1, 5], k = 2
 * Output: 7
 * Explanation: Subarray [3, 4] has the maximum sum.
 *
 * Input: nums = [1, 1, 1], k = 3
 * Output: 3
 *
 * Input: nums = [1, 2], k = 3
 * Output: null
 *
 * Approach:
 * Use the sliding window technique.
 * First, calculate the sum of the first window of size k.
 * Then slide the window by removing the left element
 * and adding the next element on the right.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */


function maximumSumSubarray(arr, k) {
    if (arr.length < k) {
        return null;
    }
    let windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum = windowSum + arr[i];
    }

    let maxValue = windowSum;
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - (arr[i - k]) + arr[i];
        maxValue = Math.max(maxValue, windowSum);
    }
    return maxValue;
}
console.log(maximumSumSubarray([2, 1, 5, 1, 3, 2], 3)) //9
console.log(maximumSumSubarray([2, 3, 4, 1, 5], 2)) // 7
console.log(maximumSumSubarray([1, 1, 1], 3)) //3
console.log(maximumSumSubarray([1, 2], 3)) // null