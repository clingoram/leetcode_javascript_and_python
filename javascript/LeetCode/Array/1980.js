/**
 * 1980. Find Unique Binary String
 * 
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
  let res = "";
  for(let i = 0;i < nums.length;i++) {
    res += (nums[i][i] === '0' ? '1' : '0');
  }
  return res;
};
let nums = ["01","10"];
// "11"
// console.log(findDifferentBinaryString(nums));