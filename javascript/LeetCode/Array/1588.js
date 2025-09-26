/*
 1588 Sum of All Odd Length Subarrays
Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.

Constraints:

1 <= arr.length <= 100
1 <= arr[i] <= 1000

  ---------------------------
  arr = 正整數的array
  可被2整除者是偶數，不可被2整除者是奇數
  
  計算:
  加總長度是奇數的陣列
  return sum of int

  -----------------
Example 1
   
  Input: arr = [1,4,2,5,3]
  Output: 58
  Explanation: The odd-length subarrays of arr and their sums are:
  [1] = 1 *
  [4] = 4
  [2] = 2
  [5] = 5 *
  [3] = 3 *
  [1,4,2] = 7
  [4,2,5] = 11
  [2,5,3] = 10
  [1,4,2,5,3] = 15
  If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
Example 3:

Input: arr = [10,11,12]
Output: 66
 
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {

    let count = 0;
    // select the starting point
    for (let i = 0; i < arr.length; i++) {
        // select the endpoint point
        for (let j = i; j < arr.length; j++) {

            //  count the subarrays which have odd length
            if ((i - j) % 2 == 0) {
                // looping from start point to end point and adding them
                for (let k = i; k <= j; k++) {
                    count += arr[k];
                }
            }
        }
    }
    return count;

    // solution 2.
    // let ans = 0;
    // for(let i = 0;i < arr.length;++i) {
    //     let currentSum = 0;
    //     for(let j = i;j < arr.length;++j) {
    //         currentSum += arr[j];
    //         ans += (j - i + 1) % 2 === 1 ? currentSum : 0;
    //     }
    // }
    // return ans;
};
const arr = [1, 4, 2, 5, 3];
console.log(sumOddLengthSubarrays(arr));
