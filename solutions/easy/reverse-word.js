/**
 * title: Move Zeros
 * difficulty: easy
 * tags: array
 * problem: Write a function reverseWords(str) that reverses the order of words in a string.
            Words are separated by one or more spaces. You must remove extra spaces so that the result has only single spaces between words and no leading or trailing spaces.

            Example:

            Input:  "  hello   world  "
            Output: "world hello"


            Test Cases:

            reverseWords("the sky is blue")      // "blue is sky the"
            reverseWords("  hello world  ")      // "world hello"
            reverseWords("a good   example")     // "example good a"
            reverseWords("  one")                // "one"
            reverseWords("")                     // ""

 */

// solution
function reverseWords(str) {
    return str.trim()
    .split(/\s+/)   // <-- handles multiple spaces elegantly
    .reverse()
    .join(" ");
}

console.log(reverseWords("the sky is blue"))  // "blue is sky the"
console.log(reverseWords("  hello world  ")), // "world hello"
console.log(reverseWords("a good   example")), // "example good a"
console.log(reverseWords("  one")), // "one"
console.log(reverseWords("")) // ""
