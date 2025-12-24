/**
 * 169. Majority Element
 *
 * 找出majority element  = 出現次數大於 nums.length / 2
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    let ans = 0;
    for(const i of nums){
      map.has(i) ? map.set(i,map.get(i)+1) : map.set(i,1);
    }
    for(const [key,value] of map) {
      if(value > (nums.length / 2)){
        ans = key;
      }
    }
    return ans;
};
let nums = [2,2,1,1,1,2,2];
// 2
console.log(majorityElement(nums));