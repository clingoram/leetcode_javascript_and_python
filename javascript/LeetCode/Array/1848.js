/**
 * 1848. Minimum Distance to the Target Element
 * 
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    /**
     * nums[i] === target
     * 找最小的abs(i - start)
     */
    let minDistance = Infinity;
    for(let i = 0;i < nums.length;++i) {
      if(nums[i] === target){
        minDistance = Math.min(minDistance,Math.abs(i - start));
      }
    }
    return minDistance;
};
// let nums = [1,2,3,4,5], target = 5, start = 3
// Output: 1
// Explanation: nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.
let nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 9;
// 0
console.log(getMinDistance(nums,target,start));