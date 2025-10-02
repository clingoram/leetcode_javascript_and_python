/**
 * 1913. Maximum Product Difference Between Two Pairs
 * Difficulty:Easy
 *
 * The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
 *
 * For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
 * Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.
 *
 * Return the maximum such product difference.
 *
 * Hints:
 * If you only had to find the maximum product of 2 numbers in an array, which 2 numbers should you choose?
 * We only need to worry about 4 numbers in the array.
 * ------------------------------------------
 * Example 1:
 * Input: nums = [5,6,2,7,4]
 * Output: 34
 * Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
 * The product difference is (6 * 7) - (2 * 4) = 34.
 *
 * Example 2:
 * Input: nums = [4,2,5,9,7,4,8]
 * Output: 64
 * Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
 * The product difference is (9 * 8) - (2 * 4) = 64.
 *
 * Constraints:
 * 4 <= nums.length <= 104
 * 1 <= nums[i] <= 104
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {

  if (nums.length <= 1) {
    return;
  }
  // 前2大和前2小各自相乘再把結果相減，各有2個elements

  // solution 1.Runtime took 216 ms
  // let copy = [...nums];
  // let max = nums.sort((a, b) => b - a);
  // let min = copy.sort((a, b) => a - b);

  // return (max[0] * max[1]) - (min[0] * min[1]);

  // solution 2.Runtime took 100 ms
  // nums.sort((a, b) => a - b);
  // let length = nums.length;
  // return (nums[length - 1] * nums[length - 2]) - (nums[0] * nums[1]);


  // solution 3.Update in 2025/10/2.Runtime took 73 ms.
  // pair a = 兩個最大數; pair b = 兩個最小數
  // sort 由大至小
  nums.sort((a,b) => b - a);
  // 取得第一組兩個最大數並相乘
  let pairA = nums.slice(0,2).reduce((acc, curr) => acc * curr, 1);
  // 取得最後面兩個最小數並相乘
  let pairB = nums.slice(nums.length - 2,nums.length).reduce((acc, curr) => acc * curr, 1);
  return Math.abs(pairA - pairB);
};
const nums = [5, 6, 2, 7, 4];
// 34 => (6*7)-(2*4)=34
console.log(maxProductDifference(nums));