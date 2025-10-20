/**
 * title: Group anagram
 * difficulty: medium
 * tags: string, array, reverse, sort, Hash map / grouping by normalized key
 * problem: Given an array of strings, group all the anagrams together into subarrays. Two words are anagrams if they contain the same characters in any order.

Function signature (example):

function groupAnagrams(words) { }


Test cases:

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
// Expected → [["eat","tea","ate"],["tan","nat"],["bat"]]

groupAnagrams([""]) 
// Expected → [[""]]

groupAnagrams(["a"]) 
// Expected → [["a"]]

groupAnagrams(["ab", "ba", "abc", "cab", "bca"]) 
// Expected → [["ab", "ba"], ["abc", "cab", "bca"]]

groupAnagrams(["xyz", "zyx", "yxz", "foo", "oof", "bar"]) 
// Expected → [["xyz", "zyx", "yxz"], ["foo", "oof"], ["bar"]]
 */

function groupAnagrams(words) {
    if (!words || words.length === 0) {
        return [];
    }

    const tracker = {};
    for (const word of words) {
        const normalized = word.split('').sort().join('');
        if (!tracker[normalized]) {
            tracker[normalized] = [];
        }
        tracker[normalized].push(word);
    }

    return Object.values(tracker);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));