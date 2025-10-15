/**
 * title: Merge Two Sorted Array
 * difficulty: easy
 * tags: array, two pointer
 * problem:
You are given two sorted integer arrays arr1 and arr2. Merge them into one sorted array without duplicates.

test cases:
mergeSortedArrays([1, 3, 5], [2, 4, 6]) → [1, 2, 3, 4, 5, 6]

mergeSortedArrays([1, 2, 2], [2, 3, 4]) → [1, 2, 3, 4]

mergeSortedArrays([], [1, 2, 3]) → [1, 2, 3]

mergeSortedArrays([5, 10, 15], [5, 10, 20]) → [5, 10, 15, 20]

mergeSortedArrays([], []) → []

mergeSortedArrays([1, 1, 1], [1, 1, 1]) → [1]
 */

function mergeSortedArrays(arr1 = [], arr2 = []) {
    // guard: normalize null/undefined to empty arrays
    if (!Array.isArray(arr1)) arr1 = [];
    if (!Array.isArray(arr2)) arr2 = [];

    let i = 0;
    let j = 0;
    const result = [];
    let lastPushed; // track last pushed value to avoid duplicates

    while (i < arr1.length && j < arr2.length) {
        const a = arr1[i];
        const b = arr2[j];

        if (a < b) {
            if (a !== lastPushed) {
                result.push(a);
                lastPushed = a;
            }
            i++;
        } else if (b < a) {
            if (b !== lastPushed) {
                result.push(b);
                lastPushed = b;
            }
            j++;
        } else { // equal
            if (a !== lastPushed) {
                result.push(a);
                lastPushed = a;
            }
            i++;
            j++;
        }
    }

    // flush leftovers from arr1
    while (i < arr1.length) {
        const a = arr1[i++];
        if (a !== lastPushed) {
            result.push(a);
            lastPushed = a;
        }
    }

    // flush leftovers from arr2
    while (j < arr2.length) {
        const b = arr2[j++];
        if (b !== lastPushed) {
            result.push(b);
            lastPushed = b;
        }
    }

    return result;
}


console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]))
console.log(mergeSortedArrays([], []))
console.log(mergeSortedArrays([5, 10, 15], [5, 10, 20]))