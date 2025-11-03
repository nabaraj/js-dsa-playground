/**
 * title: Valid Parentheses
 * difficulty: easy
 * tags: array, hash-map, string
 * problem: Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.
An input string is valid if:

Open brackets are closed by the same type of brackets.

Open brackets are closed in the correct order.

Function signature (JavaScript):

function isValid(s) { }


Test cases:

console.log(isValid("()")); 
// Expected → true

console.log(isValid("()[]{}")); 
// Expected → true

console.log(isValid("(]")); 
// Expected → false

console.log(isValid("([)]")); 
// Expected → false

console.log(isValid("{[]}")); 
// Expected → true
 */

function isValid(s) {
    if (s.length % 2 !== 0) return false;
    const parenthesisObject = { "}": "{", ")": "(", "]": "[" };
    const tracker = []
    for (const par of s) {
        // console.log({ par }, parenthesisObject[par])
        if (!parenthesisObject[par]) {
            tracker.push(par);
        } else {
            if (tracker[tracker.length - 1] === parenthesisObject[par]) {
                tracker.pop()
            } else { return false }
        }
    }
    console.log({ tracker })
    return tracker.length === 0;
}

console.log(isValid("()"));
// // Expected → true
console.log(isValid("(])"));
// // Expected → false

console.log(isValid("()[]{}"));
// // Expected → true

console.log(isValid("(]"));
// Expected → false

console.log(isValid("([)]"));
// // Expected → false

console.log(isValid("{[]}"));
// Expected → true