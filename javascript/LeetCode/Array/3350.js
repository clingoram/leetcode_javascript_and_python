/**
 * 3350. Adjacent Increasing Subarrays Detection II
 * 
 * 找出連續increase的子陣列，最大長度為？
 * 子陣列有2組
 * 
 * starting at indices a and b (a < b)
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function(nums) {
  let current = 1, previous = 0,ans = 0;
  for(let i = 1;i < nums.length;++i) {
    if(nums[i - 1] < nums[i]){  
      current++;
    }else{
      previous = current;
      current = 1;
    }
    ans = Math.max(ans, Math.min(previous, current));
    ans = Math.max(ans, Math.floor(current / 2));
  }
  return ans;
};
let nums = [2,5,7,8,9,2,3,4,3,1];
/**
 * 3
 * The subarray starting at index 2 is [7, 8, 9], which is strictly increasing.
 * The subarray starting at index 5 is [2, 3, 4], which is also strictly increasing.
 * These two subarrays are adjacent, and 3 is the maximum possible value of k for which two such adjacent strictly increasing subarrays exist.
 */
console.log(maxIncreasingSubarrays(nums));