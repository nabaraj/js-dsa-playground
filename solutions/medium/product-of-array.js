/**
 * title: Product of Array Except Self
 * difficulty: medium
 * tags: Array, products
 * Problem:
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
You must solve it without using the division operator and in O(n) time.

Function signature (JavaScript):

function productExceptSelf(nums) { }


Test cases:

console.log(productExceptSelf([1,2,3,4]));
// Expected → [24,12,8,6]

console.log(productExceptSelf([-1,1,0,-3,3]));
// Expected → [0,0,9,0,0]

console.log(productExceptSelf([2,3,4,5]));
// Expected → [60,40,30,24]

console.log(productExceptSelf([10,0]));
// Expected → [0,10]
 */

function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    // Prefix pass
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    // Suffix pass
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));