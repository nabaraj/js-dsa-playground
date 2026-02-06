/**
 * title: Length of the longest consecutive sequence
 * difficulty: medium
 * tags: array, sorting
 *
 * problem:
 * Given an array of integers nums, return the length of the longest
 * consecutive sequence.
 *
 * A consecutive sequence means numbers that increase by 1
 * without gaps. Order does not matter.
 */
function consecutiveSequence(arr) {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return 1;
    let maxLength = 0;

    const sorted = Array.from(new Set(arr));
    const arrSorted = sorted.sort((a, b) => a - b)

    // unique.sort((a, b) => a - b);

    let currentLength = 1;

    for (let i = 1; i < arrSorted.length; i++) {
        if (arrSorted[i] === arrSorted[i - 1] + 1) {
            currentLength++
        } else {
            maxLength = Math.max(maxLength, currentLength);
            currentLength = 1;
        }
    }
    return Math.max(maxLength, currentLength);
}

// verify
console.log(consecutiveSequence([100, 4, 200, 1, 3, 2])); // 4
console.log(consecutiveSequence([0, -1, 1, 2, -2, 3])); // 6
console.log(consecutiveSequence([10, 30, 20])); // 1
console.log(consecutiveSequence([])); // 0
