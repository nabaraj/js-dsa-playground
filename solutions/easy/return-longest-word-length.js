/**
 * title: Return longest word length
 * difficulty: easy
 * tags: array, string
 * problem: Given an array of strings words, return the length of the longest word.

If the array is empty, return 0.

Test cases

Input: words = ["apple", "banana", "kiwi"]
Output: 6

Input: words = ["a", "ab", "abc"]
Output: 3

Input: words = []
Output: 0

Input: words = ["frontend"]
Output: 8
 */

function longestWordLength(strs) {
    let maxLength = 0;

    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length > maxLength) {
            maxLength = strs[i].length;
        }
    }

    return maxLength;
}

console.log(longestWordLength(["apple", "banana", "kiwi"]));
console.log(longestWordLength(["a", "ab", "abc"]));
console.log(longestWordLength([]));
console.log(longestWordLength(["frontend"]));