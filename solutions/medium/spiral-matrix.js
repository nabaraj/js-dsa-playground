/**
 * title: Spiral Matrix
 * difficulty: medium
 * tags: Array, Matrix, Simulation, Two Pointers / Boundary pointers, Traversal
 * Problem:
Given an m x n matrix, return all elements of the matrix in spiral order.
Function signature (JavaScript):

function spiralOrder(matrix) { }


Test cases:

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
// Expected → [1,2,3,6,9,8,7,4,5]

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
// Expected → [1,2,3,4,8,12,11,10,9,5,6,7]

console.log(spiralOrder([[1]]));
// Expected → [1]

console.log(spiralOrder([[2,5,8],[4,0,-1]]));
// Expected → [2,5,8,-1,0,4]
 */
function spiralOrder(matrix) {
    if (!matrix || matrix.length === 0) return [];

    const res = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let c = left; c <= right; c++) {
            res.push(matrix[top][c])
        }
        top++
        for (let c = top; c <= bottom; c++) {
            res.push(matrix[c][right]);
        }
        right--;
        if (top <= bottom) {
            for (let c = right; c >= left; c--) {
                res.push(matrix[bottom][c])
            }
            bottom--;
        }
        if (left <= right) {
            for (let c = bottom; c >= top; c--) {
                res.push(matrix[c][left])
            }
            left++
        }
    }
    return res
}

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// Expected → [1,2,3,6,9,8,7,4,5]

console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
// Expected → [1,2,3,4,8,12,11,10,9,5,6,7]

console.log(spiralOrder([[1]]));
// Expected → [1]

console.log(spiralOrder([[2, 5, 8], [4, 0, -1]]));
// Expected → [2,5,8,-1,0,4]