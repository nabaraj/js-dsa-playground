/**
 * Title: Valid Palindrome
 * Difficulty: Easy
 * Tags: string, hash-map
 *
 * Problem:
 * Given a string s, check if it is a valid palindrome.
 * Ignore spaces, punctuation, and case.
 * Return true if it is a palindrome, otherwise false.
 *
 * Examples:
 * Input: s = "A man, a plan, a canal: Panama"
Output: true

Input: s = "race a car"
Output: false

Input: s = " "
Output: true

Input: s = "No lemon, no melon"
Output: true
 */
const validPalindrome = (str) => {
    const cleanedStr = str.replace(/[^a-zA-Z]/g, "");
    return cleanedStr.toLowerCase() === cleanedStr.toLowerCase().split('').reverse().join('');
}

console.log(validPalindrome('A man, a plan, a canal: Panama')) //true
console.log(validPalindrome('race a car')) //false
console.log(validPalindrome(' ')) //true
console.log(validPalindrome('No lemon, no melon')) //true

const validPalindromeTwoPointers = (str) => {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "");
    let first = 0;
    let last = cleanedStr.length - 1;

    while (first <= last) {
        if (cleanedStr[first].toLowerCase() !== cleanedStr[last].toLowerCase()) {
            return false
        }
        first++;
        last--;
    }
    return true;
}

console.log(validPalindromeTwoPointers('A man, a plan, a canal: Panama')) //true
console.log(validPalindromeTwoPointers('race a car')) //false
console.log(validPalindromeTwoPointers(' ')) //true
console.log(validPalindromeTwoPointers('No lemon, no melon')) //true