/**
 * 1200. Minimum Absolute Difference
 * 
 * 給一個無重複元素的數字陣列，找出兩個元素間相差最小的元素並將它們歸類為一組，回傳陣列為二維陣列，必須遞增方式排序[a,b]
 *   a < b
 *   b - a = 每組最小相等值
 * 
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a - b);
    let min = Infinity;
    let res = [];
    for(let i = 1;i < arr.length;++i) {
      let diff = arr[i] - arr[i-1];
      if(diff < min){
        min = diff;
        res = [i - 1];
      }else if(diff === min){
        res.push(i - 1);
      }
    }
    return res.map(i => [arr[i], arr[i + 1]]);
};
// let nums = [4,2,1,3];
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
let nums = [-17,46,63,81,-101,-91,121,-2,112,-15,-65,-96,6,-139];
// [[-17,15]]
console.log(minimumAbsDifference(nums));