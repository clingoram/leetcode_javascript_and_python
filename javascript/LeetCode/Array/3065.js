/**
 * 3065. Minimum Operations to Exceed Threshold Value I
 * 
 * 一次操作步驟可移除一個nums最小的元素，回傳共需要多少次才能把nums內所有元素 >= k
 * 要把所有比k小的元素都移除，簡單來講就是要計算nums中有幾個元素比k小。
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  let result = 0;
  for(let i = 0;i < nums.length;i++) {
    if(nums[i] < k){
      result++;
    }
  }
  return result;
};
let nums = [2,11,10,1,3], k = 10;
// 3
console.log(minOperations(nums,k));