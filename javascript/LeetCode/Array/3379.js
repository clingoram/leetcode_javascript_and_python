/**
 * 3379. Transformed Array
 * 
 * nums is circular，所以不管往左或往右，都有可能回到原點
 *  
 * nums[i] > 0 => index i往右移nums[i]步至nums[i]的位置，並將result[i]設成index i值
 * nums[i] < 0 => index i往左移nums[i]步至abs(nums[i])的位置，並將result[i]設成index i值
 * nums[i] === 0 => result[i] = nums[i]
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    let res = [];
    for(let i = 0;i < nums.length;++i) {
      // 計算要往左或右，在哪個index
      res[i] = nums[((i + nums[i]) % nums.length + nums.length) % nums.length];
    }
    return res;
};
let nums = [3,-2,1,1];
/*
Output: [1,1,1,3]
Explanation:
For nums[0] that is equal to 3, If we move 3 steps to right, we reach nums[3]. So result[0] should be 1.
For nums[1] that is equal to -2, If we move 2 steps to left, we reach nums[3]. So result[1] should be 1.
For nums[2] that is equal to 1, If we move 1 step to right, we reach nums[3]. So result[2] should be 1.
For nums[3] that is equal to 1, If we move 1 step to right, we reach nums[0]. So result[3] should be 3.
*/
console.log(constructTransformedArray(nums));