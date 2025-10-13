/**
 * title: Find the Missing Number
 * difficulty: medium
 * tags: string
 * problem: Task: Given a string s, return the length of the longest substring that has no repeating characters.

Function signature (example):

function longestUniqueSubstr(s: string): number


Test cases:

s = "abcabcbb" → 3 (substring "abc")

s = "bbbbb" → 1 (substring "b")

s = "pwwkew" → 3 (substring "wke")

s = "" → 0

s = "dvdf" → 3 (substring "vdf")

s = "anviaj" → 5 (substring "nviaj")

s = "abba" → 2 (substring "ab" or "ba")

Edge cases: unicode characters, very long strings (performance), spaces and punctuation.
 */

function longestUniqueSubstr(s) {
    let seen = new Map();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (seen.has(char) && seen.get(char) >= left) {
            left = seen.get(char) + 1;
        }

        seen.set(char, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

console.log(longestUniqueSubstr("dvdf"));