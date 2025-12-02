/**
 * title: First unique character
 * difficulty: easy
 * tags: string, hash-map
 *
 * problem:
 * Given a string, return the first character that appears only once.
 * If no unique character exists, return an empty string.
 *
 * Test cases:
 * "stress"  → "t"
 * "aabbcc"  → ""
 * "abcdab"  → "c"
 * ""        → ""
 */
function firstUniqueCharacter(s) {
    if (s.length === 0) return "";

    const tracker = new Map();

    // Count frequency of each char
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        tracker.set(char, (tracker.get(char) || 0) + 1);
    }

    // Find the first char with count 1
    for (let i = 0; i < s.length; i++) {
        if (tracker.get(s[i]) === 1) {
            return s[i];
        }
    }

    return "";
}
console.log(firstUniqueCharacter("stress"))
console.log(firstUniqueCharacter("aabbcc"))
console.log(firstUniqueCharacter("abcdab"))