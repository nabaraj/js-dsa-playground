/**
 * title: Find largest string
 * difficulty: easy
 * tags: array, string
 * problem: Given an array of strings, return the string with the maximum length.
 * If there are multiple, return the first one.
 * If the array is empty, return an empty string.

 * Test cases:

 * ["hi", "hello", "hey"] → "hello"

 * ["a", "bb", "ccc", "dd"] → "ccc"

 * [] → ""

 * ["same", "size", "test"] → "same"
 */

function findLargestString(strs) {
    let maxString = ''
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length > maxString.length) {
            maxString = strs[i];
        }
    }

    return maxString
}

console.log(findLargestString(["hi", "hello", "hey"]));
console.log(findLargestString(["a", "bb", "ccc", "dd"]));
console.log(findLargestString([]));
console.log(findLargestString(["same", "size", "test"]));