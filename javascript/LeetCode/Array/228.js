/**
 * 228. Summary Ranges
 * 
 * 參數為數值陣列，若元素是連續且唯一值，則形成一個range，從第一個連續數值到某一元素，若非連續，則直接push進result array
 * 
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let res = [];
  let i = 0;
  while (i < nums.length) {
    let start = i;
    while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      i++;
    }
    if (start === i) {
      res.push(nums[start].toString());
    } else {
      res.push(nums[start] + "->" + nums[i]);
    }
    i++;
  }
  return res;
};
let nums = [0,1,2,4,5,7];
// ["0->2","4->5","7"]
console.log(summaryRanges(nums));