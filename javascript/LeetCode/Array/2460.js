/**
 * 2460. Apply Operations to an Array
 * 
 * 操作n - 1次
 * 若nums[i] === nums[i +1]，則將nums[i] * 2，將nums[i+1]改成0
 * 完成所有操作，將所有的0移到陣列最後面
 * 回傳陣列
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    let j = 0;
    for(let i = 0;i < nums.length - 1;++i) {
      if(nums[i] === nums[i+1]){
        nums[i] *= 2;
        nums[i + 1] = 0;
      }
    }
    for(let i = 0;i < nums.length;++i) {
      if(nums[i] !== 0){
        nums[j] = nums[i];
        j++;
      }
    }
    while (j < nums.length) {
      nums[j++] = 0;
    }
    return nums;
};
let nums = [1,2,2,1,1,0]
// Output: [1,4,2,0,0,0]
// Explanation: We do the following operations:
// i = 0: nums[0] and nums[1] are not equal, so we skip this operation.
// i = 1: nums[1] and nums[2] are equal, we multiply nums[1] by 2 and change nums[2] to 0. The array becomes [1,4,0,1,1,0].
// i = 2: nums[2] and nums[3] are not equal, so we skip this operation.
// i = 3: nums[3] and nums[4] are equal, we multiply nums[3] by 2 and change nums[4] to 0. The array becomes [1,4,0,2,0,0].
// i = 4: nums[4] and nums[5] are equal, we multiply nums[4] by 2 and change nums[5] to 0. The array becomes [1,4,0,2,0,0].
// After that, we shift the 0's to the end, which gives the array [1,4,2,0,0,0].
console.log(applyOperations(nums));