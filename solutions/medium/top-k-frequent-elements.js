/**
 * title: Top K Frequent Elements
 * difficulty: medium
 * tags: HashMap, Sorting, TopK, JavaScript, Array
 * problem: Given an integer array nums and an integer k, return the k most frequent elements.
You may return the answer in any order.

Function signature (JavaScript):

function topKFrequent(nums, k) { }


Test cases:

console.log(topKFrequent([1,1,1,2,2,3], 2));
// Expected → [1, 2]

console.log(topKFrequent([1], 1));
// Expected → [1]

console.log(topKFrequent([4,4,4,5,6,5,5,7,7,7,7], 3));
// Expected → [7, 5, 4]

console.log(topKFrequent([1,2,2,3,3,3], 2));
// Expected → [3, 2]

console.log(topKFrequent([5,5,5,6,6,7,8,8,8,8], 1));
// Expected → [8]
 */
// Solution 1

// Time complexity:
// O(n + m log m) → n for counting, m log m for sorting (where m = unique elements).

// Space complexity:
// O(m) for the frequency map.

// Why it’s good:

// Easy to implement and understand.

// Works fine when n or m are moderate.
function topKFrequent(nums, k) {
    const tracker = {};
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (!tracker[n]) tracker[n] = 0;
        tracker[n] = tracker[n] + 1;
    }

    const sortedArr = Object.keys(tracker).sort((a, b) => tracker[b] - tracker[a]);
    return sortedArr.slice(0, k).map(Number);
}

// Solution 2
// bucket sort
// Method:

// Build a frequency map as before.

// Create an array of buckets, where index i holds all numbers that appear i times.

// Traverse the buckets from high frequency to low, collecting numbers until you have k.

// Time complexity:
// O(n) → no explicit sorting step, just counting and grouping.

// Space complexity:
// O(n) → for buckets and map.

// Why it’s good:

// Faster for large arrays.

// Avoids sorting by leveraging the limited range of frequencies.
function topKFrequent(nums, k) {
    if (k === 0) return [];
    const freq = new Map();
    for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);

    const buckets = new Array(nums.length + 1).fill(null).map(() => []);
    for (const [num, count] of freq) {
        buckets[count].push(num);
    }

    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        if (buckets[i].length) result.push(...buckets[i]);
    }
    return result.slice(0, k);
}


