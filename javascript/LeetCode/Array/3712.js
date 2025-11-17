/**
 * 3712. Sum of Elements With Frequency Divisible by K
 * 
 * 加總回傳能夠被k整除的element出現次數，在能被k整除的前提下，element出現幾次就是加幾次，例如k = 3，而2出現3次，則2加自己3次（乘自己3次）
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function(nums, k) {
  let ans = 0;
  let map = new Map();
  for(let i = 0;i < nums.length;++i) {
	map.has(nums[i]) ? map.set(nums[i],map.get(nums[i]) + 1) : map.set(nums[i],1);
  }
  for(const [key,value] of map) {
	if(value % k === 0){
		ans += key * value;
	}
  }
  return ans;
};
let nums = [1,2,2,3,3,3,3,4], k = 2;
// 16