/**
 * 1534. Count Good Triplets
 * 
 * good triplets:
 * 0 <= i < j < k < arr.length
 * |arr[i] - arr[j]| <= a
 * |arr[j] - arr[k]| <= b
 * |arr[i] - arr[k]| <= c
 * 
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let ans = 0;
    for(let i = 0;i < arr.length;i++) {
      for(let j = i+1;j < arr.length;j++) {
        for(let k = j+1;k < arr.length;k++) {
          if(Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c){
            ans++;
          }
        }
      }
    }
    return ans;
};
let arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3;
// Output: 4
// Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
console.log(countGoodTriplets(arr,a,b,c));