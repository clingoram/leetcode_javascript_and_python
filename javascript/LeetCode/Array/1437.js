/**
 * 1437. Check If All 1's Are at Least Length K Places Away
 * 
 * 檢查每個1之間是否至少有k個0
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
  let count = k;
  for(let i = 0;i < nums.length;i++) {
    if(nums[i] === 0){
      count++;
      continue;
    }
    if(count < k){
      return false;
    }
    count = 0;
  }
  return true;
};
let nums = [1,0,0,1,0,1], k = 2;
// false
// let nums = [1,0,0,0,1,0,0,1], k = 2;
// true
console.log(kLengthApart(nums,k))