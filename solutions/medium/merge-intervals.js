/**
 * title: Merge Intervals
 * difficulty: medium
 * tags: tags: array, sorting, greedy, interval
 * problem: Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.

Function signature (JavaScript):

function merge(intervals) { }


Test cases:

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
// Expected → [[1,6],[8,10],[15,18]]

console.log(merge([[1,4],[4,5]]));
// Expected → [[1,5]]

console.log(merge([[1,10],[2,3],[4,5],[6,7]]));
// Expected → [[1,10]]

console.log(merge([]));
// Expected → []
*/

function merge(intervals) {
    if (!Array.isArray(intervals) || intervals.length === 0) return [];

    // Sort by start
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    for (const [start, end] of intervals) {
        // if result is empty or current interval doesn't overlap with last, push it
        if (result.length === 0 || result[result.length - 1][1] < start) {
            result.push([start, end]);
        } else {
            // otherwise they overlap — merge by extending the end
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], end);
        }
    }

    return result;
}