/**
 * 1572. Matrix Diagonal Sum
 * 
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    // 二維陣列，裡面的陣列是奇數的，取該陣列偶數index值;裡面陣列是偶數的，取該陣列奇數index值
    let result = 0;
    let len = mat.length;
    let mid = Math.floor(len / 2 );
    for (let i = 0; i < len; i++) {
      result += mat[i][i];
      result += mat[len - 1 - i][i];
    }
    if (len % 2 != 0) {
      result -= mat[mid][mid];
    }
    return result;
};
let mat = [[1,2,3],[4,5,6],[7,8,9]];
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.
console.log(diagonalSum(mat));