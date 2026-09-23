/**
 * 4038. Count Integers Appearing in a Single Block
 * 
 * special = 同一元素連續出現在接續的index
 * 
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function(nums) {
    const isContiguous = (arr) => {
      for(let i = 1;i < arr.length;++i){
        if(arr[i] !== arr[i - 1] + 1){
          return false;
        }
      }
      return true;
    }

    let ans = 0;
    const map = new Map();
    for(let i = 0;i < nums.length;++i) {
      if(!map.has(nums[i])){
        map.set(nums[i], []);
      }
      map.get(nums[i]).push(i);
    }
    
    for(const i of map.values()) {
      if(isContiguous(i)){
        ans++;
      }
    }
    return ans;
};
let nums = [3,3,1,2,2,1];
// 2
// let nums = [22];
// 1
console.log(countSpecialIntegers(nums));