/**
 * 2598. Smallest Missing Non-negative Integer After Operations
 * 
 * 在一次操作中，可以從任一元素中，加value或減value
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function(nums, value) {
  const mp = new Array(value).fill(0);
  for(let i = 0;i < nums.length;i++) {
      const v = ((nums[i] % value) + value) % value;
      mp[v]++;
  }
  // console.log(mp)
  let mex = 0;
  while(mp[mex % value] > 0){
      mp[mex % value]--;
      mex++;
  }
  return mex;
};
let nums = [1,-10,7,13,6,8], value = 5;
// Output: 4
// Explanation: One can achieve this result by applying the following operations:
// - Add value to nums[1] twice to make nums = [1,0,7,13,6,8]
// - Subtract value from nums[2] once to make nums = [1,0,2,13,6,8]
// - Subtract value from nums[3] twice to make nums = [1,0,2,3,6,8]
// The MEX of nums is 4. It can be shown that 4 is the maximum MEX we can achieve.
console.log(findSmallestInteger(nums,value));