/**
 * 3151. Special Array I
 * 
 * 檢查陣列任兩個相鄰元素的奇偶性是否都不同。若是回傳true
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
  if(nums.length === 1){
    return true;
  }
  for(let i = 0;i < nums.length;++i) {
    let previous = nums[i];
    let next = nums[i + 1];
    if(previous % 2 !== next % 2){
      continue;
    }else{
      return false;
    }
  }
  return true;
};
// let nums = [4,3,1,6];
// false
let nums = [2,1];
// true
console.log(isArraySpecial(nums))