/**
 * 645. Set Mismatch
 * 
 * 參數為數字陣列，從1至n，但內有重複的元素，找出重複的元素並調整成對的元素，變成1至N且無重複的元素
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  // TC:O(N)
  let map = new Map();
  let duplicate = 0, missing = 0;
  for(let i = 1;i <= nums.length;++i){   
    map.set(i,0);
  }
  // 增加或減少
  for(const ele of nums){
    map.set(ele,map.get(ele) - 1);
  }
  // console.log(map)
  for(const [key,value] of map) {
    if(value === -2){
      duplicate = key
    }
    if(value === 0){
      missing = key;
    }
  }
  return [duplicate,missing];
};
let nums = [1,2,2,4];
// [2,3]
console.log(findErrorNums(nums));