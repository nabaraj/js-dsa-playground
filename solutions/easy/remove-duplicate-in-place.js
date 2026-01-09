/**
 * Title: Remove Duplicates from Sorted Array
 * Difficulty: Easy
 * Tags: Array, Two Pointers
 *
 * Problem:
 * Given a sorted array of integers nums, remove the duplicates in-place
 * such that each unique element appears only once.
 *
 * The relative order of the elements should be kept the same.
 * Return the number of unique elements.
 *
 * It is guaranteed that the array is sorted.
 * Elements beyond the returned length do not matter.
 *
 * Examples:
 * Input: nums = [1,1,2]
 * Output: 2   // nums becomes [1,2,_]
 *
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5   // nums becomes [0,1,2,3,4,_...]
 *
 * Input: nums = [5]
 * Output: 1
 *
 * Input: nums = []
 * Output: 0
 */

const removeDuplicateInPlace = (arr) => {
    if (arr.length === 0) return 0;
    let write = 1;
    for (let read = 1; read < arr.length; read++) {
        if (arr[read] !== arr[read - 1]) {
            arr[write] = arr[read];
            write++;
        }
    }
    return write;
}

console.log(removeDuplicateInPlace([1, 1, 2])) //2
console.log(removeDuplicateInPlace([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])) //5
console.log(removeDuplicateInPlace([5])) //1
console.log(removeDuplicateInPlace([])) //0

