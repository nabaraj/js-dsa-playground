/**
 * title: Trapping Rain Water
 * difficulty: hard
 * tags: array
 * 

Problem:
Given an array of non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Function signature (JavaScript):

function trap(height) { }


Test cases:

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
// Expected → 6

console.log(trap([4,2,0,3,2,5]));
// Expected → 9

console.log(trap([1,0,2,1,0,1,3]));
// Expected → 5
*/


function trap_brutish(heights) {
    const findMax = (arr) => {
        if (arr.length === 0) return -Infinity;
        return Math.max(...arr); // risky for huge arrays (spread)
    };

    let sum = 0;
    for (let i = 0; i < heights.length; i++) {
        const h = heights[i];
        const leftMax = findMax(heights.slice(0, i)); // O(i)
        const rightMax = findMax(heights.slice(i));   // O(n-i)
        const water = Math.min(leftMax, rightMax) - h;
        if (water > 0) sum += water;
    }
    return sum;
}

// --------- O(n) with precomputed left_max and right_max arrays (O(n) time, O(n) space) ---------
function trap_prefix(heights) {
    const n = heights.length;
    if (n < 3) return 0;

    const leftMax = new Array(n);
    const rightMax = new Array(n);

    // build leftMax (max up to and including i)
    let cur = -Infinity;
    for (let i = 0; i < n; i++) {
        cur = Math.max(cur, heights[i]);
        leftMax[i] = cur;
    }

    // build rightMax (max from i to end)
    cur = -Infinity;
    for (let i = n - 1; i >= 0; i--) {
        cur = Math.max(cur, heights[i]);
        rightMax[i] = cur;
    }

    // compute trapped water
    let total = 0;
    for (let i = 0; i < n; i++) {
        const waterLevel = Math.min(leftMax[i], rightMax[i]);
        const add = waterLevel - heights[i];
        if (add > 0) total += add;
    }
    return total;
}

// --------- Two-pointer O(n) time, O(1) extra space ---------
function trap_twoPointer(heights) {
    let left = 0;
    let right = heights.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let total = 0;

    while (left <= right) {
        if (heights[left] <= heights[right]) {
            if (heights[left] >= leftMax) leftMax = heights[left];
            else total += leftMax - heights[left];
            left++;
        } else {
            if (heights[right] >= rightMax) rightMax = heights[right];
            else total += rightMax - heights[right];
            right--;
        }
    }
    return total;
}

function randomArray(n, max = 1000) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * max));
}

const arr = randomArray(100000); // try 100k

console.time('brutish');
trap_brutish(arr);
console.timeEnd('brutish');

console.time('prefix');
trap_prefix(arr);
console.timeEnd('prefix');

console.time('twoPtr');
trap_twoPointer(arr);
console.timeEnd('twoPtr');
