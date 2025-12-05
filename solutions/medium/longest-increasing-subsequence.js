/**
 * title: Longest increasing subsequence
 * difficulty: medium
 * tags: array, hashmap
 *
 * problem:
 * You get an array of numbers. Find the longest increasing subsequence length. The numbers do not need to be next to each other.

Test cases:

Input: [10, 9, 2, 5, 3, 7, 101, 18] → Output: 4

Input: [0, 1, 0, 3, 2, 3] → Output: 4

Input: [7, 7, 7, 7] → Output: 1
 */
function lengthOfLIS_DP(nums) {
    if (!nums || nums.length === 0) return 0;

    const n = nums.length;
    const dp = new Array(n).fill(1); // dp[i] = LIS length ending at i

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

// Example
console.log(lengthOfLIS_DP([10, 9, 2, 5, 3, 7, 101, 18])); // 4
console.log(lengthOfLIS_DP([0, 1, 0, 3, 2, 3])); // 4
console.log(lengthOfLIS_DP([7, 7, 7, 7])); // 1
