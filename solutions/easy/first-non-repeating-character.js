/**
 * title: First non-repeating character
 * difficulty: easy
 * tags: string
 * problem: First non-repeating character

Problem:
Given a string s, return the index of the first non-repeating character. If every character repeats, return -1. Characters are case-sensitive.

Signature (JS):

function firstNonRepeatingChar(s) { }


Test cases:

firstNonRepeatingChar("leetcode") → 0

firstNonRepeatingChar("loveleetcode") → 2

firstNonRepeatingChar("aabb") → -1

firstNonRepeatingChar("z") → 0

firstNonRepeatingChar("aaabcccdee") → 6 // 'd' at index 6

firstNonRepeatingChar("") → -1

firstNonRepeatingChar("Aa") → 0 // 'A' and 'a' are different

firstNonRepeatingChar("swiss") → 0 // 's' at index 0 repeats later, but first non-repeating is 'w' at 1 — wait, careful: expected should be 1. (See note.)

Note: Be careful with test case 8 — double-check expected output when you run tests.
 */

function firstNonRepeatingChar(s) {
    if (!s) return -1;
    const tracker = new Map();
    let result = -1
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        tracker.set(char, (tracker.get(char) || 0) + 1)
    }
    for (let i = 0; i < s.length; i++) {
        if (tracker.get(s[i]) === 1) return i;
    }
    return result;
}
console.log(firstNonRepeatingChar("aabb"))
console.log(firstNonRepeatingChar("loveleetcode"))