/**
 * title: Continuous Subarrays Sum
 * difficulty: medium
 * tags: array, prefix-sum, hashmap
 *
 * problem:
 * You are given an array of integers. Find the number of continuous
 * (contiguous) subarrays whose sum is equal to a target value k.
 */
function continuousSubarraySum(nums, k) {
    let count = 0;
    let prefix = 0;
    const map = new Map();
    map.set(0, 1); // base case

    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i];

        // if prefix - k seen before, those prefixes form subarrays summing to k
        if (map.has(prefix - k)) {
            count += map.get(prefix - k);
        }

        map.set(prefix, (map.get(prefix) || 0) + 1);
    }
    return count;
}

// verify
console.log(continuousSubarraySum([1, 1, 1], 2)); // 2
console.log(continuousSubarraySum([3, 4, 7, -2, 2, 1, 4, 2], 7)); // 6 (correct)
console.log(continuousSubarraySum([5], 5)); // 1
