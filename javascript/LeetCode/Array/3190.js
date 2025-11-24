/**
 * 3190. Find Minimum Operations to Make All Elements Divisible by Three
 * 
 * 計算能將所有元素被3整除的步驟為幾，一次操作能將元素+1或-1。
 * 
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
  let answer = 0;
  for(let i = 0;i < nums.length;++i) {
    if(nums[i] % 3 !== 0){
      answer++;
    }
  }
  return answer;
};
let nums = [1,2,3,4];
// 3
console.log(minimumOperations(nums));