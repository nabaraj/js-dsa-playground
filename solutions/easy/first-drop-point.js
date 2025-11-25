/**
 * title: First Drop Point in an Array
 * difficulty: easy
 * tags: array, hash-map
 * problem: Given an array of integers, return the index of the first element that is strictly greater than the element immediately after it.

If no such element exists, return -1.
**/

function firstDropIndex(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            return i;
        }
    }
    return -1;
}

// solution
console.log(firstDropIndex([1, 2, 3, 4]));
// Expected: -1  (never decreases)

console.log(firstDropIndex([5, 3, 8, 9]));
// Expected: 0   (5 > 3, so index = 0)

console.log(firstDropIndex([2, 2, 2]));
// Expected: -1  (never strictly greater)

console.log(firstDropIndex([10, 9, 8]));
// Expected: 0   (10 > 9)

console.log(firstDropIndex([4, 6, 5, 10, 11]));
// Expected: 1   (6 > 5 → index 1)

console.log(firstDropIndex([7]));
// Expected: -1  (no next element)

console.log(firstDropIndex([]));
// Expected: -1 (empty array)
