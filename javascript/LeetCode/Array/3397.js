/**
 * 3397. Maximum Number of Distinct Elements After Operations
 * 
 * 每個元素最多只能加integer(range: -k ~ k)至元素一次
 * 操作完後，回傳陣列元素都是唯一值的有幾個
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function(nums, k) {
    // Find the minimum element which is not used for each element.
    let ans = 0;
    let minValue = -Infinity;
    nums.sort((a,b) => a - b);
    for(let i = 0;i < nums.length;++i) {
      if(minValue > nums[i] + k){
        continue;
      }
      minValue = Math.max(nums[i] - k,minValue) + 1
      ans++;
    }
    return ans;
};
let nums = [1,2,2,3,3,4], k = 2;
// Output: 6
// Explanation:
// nums changes to [-1, 0, 1, 2, 3, 4] after performing operations on the first four elements.
console.log(maxDistinctElements(nums,k))