/**
 * 3354. Make Array Elements Equal to Zero
 * 
 * curr = index,nums[index] == 0
 * 若curr超過範圍[0,nums.length - 1] 操作結束
 * 若nums[index] == 0，則curr 增加（往右)，反之則curr減少（往左）
 * nums[index] > 0 ，nums[current] - 1且左右反轉
 * 
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function(nums) {
    // you need to find the sum of all the numbers to the left of where nums[i]==0 and the sum of all the numbers to the right of that point. 
    // If you need more help, look at the detailed explanation in this comment.
    let ans = 0;
    let sum = nums.reduce((a,b) => a + b,0);
    let left = 0,right = sum;
    for(let i = 0;i < nums.length;++i) {
      if(nums[i] === 0){
        if(left - right >= 0 && left - right <= 1) {
          ans++;
        }
        if(right - left >= 0 && right - left <= 1) {
          ans++;
        }
      }else{
        left += nums[i];
        right -= nums[i];
      }
    }
    return ans;
};
let nums = [1,0,2,0,3];
/**
 * 2
 * The only possible valid selections are the following:
Choose curr = 3, and a movement direction to the left.
[1,0,2,0,3] -> [1,0,2,0,3] -> [1,0,1,0,3] -> [1,0,1,0,3] -> [1,0,1,0,2] -> 
[1,0,1,0,2] -> [1,0,0,0,2] -> [1,0,0,0,2] -> [1,0,0,0,1] -> [1,0,0,0,1] -> 
[1,0,0,0,1] -> [1,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> [0,0,0,0,1] -> 
[0,0,0,0,1] -> [0,0,0,0,0].

Choose curr = 3, and a movement direction to the right.
[1,0,2,0,3] -> [1,0,2,0,3] -> [1,0,2,0,2] -> [1,0,2,0,2] -> [1,0,1,0,2] -> 
[1,0,1,0,2] -> [1,0,1,0,1] -> [1,0,1,0,1] -> [1,0,0,0,1] -> [1,0,0,0,1] -> 
[1,0,0,0,0] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [1,0,0,0,0] -> [0,0,0,0,0].
 */
console.log(countValidSelections(nums));