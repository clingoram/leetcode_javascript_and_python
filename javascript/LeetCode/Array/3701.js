/**
 * 3701. Compute Alternating Sum
 * 
 * alternating sum ：偶數index相加，奇數index相減
 * 偶數[0] - 奇數[1] + 偶數[2] - 奇數[3]
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSum = function(nums) {
    let ans = 0;
    for(let i = 0;i < nums.length;i++) {
      // 偶數
      if(i % 2 === 0){
        ans += nums[i];
      }else{
        ans -= nums[i]
      }
    }
    return ans;
};
let nums = [1,3,5,7]
/*
Output: -4
Elements at even indices are nums[0] = 1 and nums[2] = 5 because 0 and 2 are even numbers.
Elements at odd indices are nums[1] = 3 and nums[3] = 7 because 1 and 3 are odd numbers.
The alternating sum is nums[0] - nums[1] + nums[2] - nums[3] = 1 - 3 + 5 - 7 = -4.
*/
console.log(alternatingSum(nums));