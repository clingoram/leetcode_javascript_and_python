/**
 * 3731. Find Missing Elements
 * 
 * 找出參數陣列中缺少的數字，並以陣列型態回傳
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
  let ans = [];
  let min = Math.min(...nums),max = Math.max(...nums);
  for(let i = min;i <= max;++i){
    if(nums.includes(i) === false){
      ans.push(i);
    }
  }
  return ans;
};
let nums = [5,1];
// [2,3,4]
console.log(findMissingElements(nums));