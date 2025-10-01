/**
 * title: Two Sum
 * difficulty: easy
 * tags: array, hash-map
 * problem: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 */

// solution
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const need = target - nums[i];
      if (map.has(need)) return [map.get(need), i];
      map.set(nums[i], i);
    }
    return [];
  }
  
  module.exports = twoSum;
  