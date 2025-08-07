/**
 * 118. Pascal's Triangle
 * 
 * Pascal's Triangle = 每個數字都是其上方兩個數字的總和
 * 
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [[1]];
  // console.log(result)
  for (let i = 0; i < numRows - 1; i++) {
    const rows = [0, ...result[result.length - 1], 0];
    const row = [];

    for (let j = 0; j < rows.length - 1; j++) {
      row.push(rows[j] + rows[j + 1]);
    }
    result.push(row);
  }
  return result; 
};
let numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(numRows));