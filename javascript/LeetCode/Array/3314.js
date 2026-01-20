/**
 * 3314. Construct the Minimum Bitwise Array I
 * 
 * prime number = 1 & itself.
 * ans[i] 與 ans[i] + 1 的位元或運算等於 nums[i]，即 ans[i] OR (ans[i] + 1) == nums[i]。
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    let ans = new Array(nums.length);

    for(let i = 0;i < nums.length;++i) {
      let maybe = -1;
      for(let j = 1;j < nums[i];++j) {
        if((j | (j + 1)) === nums[i]){
          maybe = j;
          break;
        }
      }
      ans[i] = maybe;
    }
    return ans;
};
let nums = [2,3,5,7];
/**
 *  [-1,1,4,3]
Explanation:
For i = 0, as there is no value for ans[0] that satisfies ans[0] OR (ans[0] + 1) = 2, so ans[0] = -1.
For i = 1, the smallest ans[1] that satisfies ans[1] OR (ans[1] + 1) = 3 is 1, because 1 OR (1 + 1) = 3.
For i = 2, the smallest ans[2] that satisfies ans[2] OR (ans[2] + 1) = 5 is 4, because 4 OR (4 + 1) = 5.
For i = 3, the smallest ans[3] that satisfies ans[3] OR (ans[3] + 1) = 7 is 3, because 3 OR (3 + 1) = 7.
 */
console.log(minBitwiseArray(nums));