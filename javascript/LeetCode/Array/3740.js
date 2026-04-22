/**
 * 3740. Minimum Distance Between Three Equal Elements I
 * 
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    /**
     * good定義：nums[i] == nums[j] == nums[k].
     * 其中(i, j, k)是3個不重複index且元素一樣
     * distance of a good tuple is abs(i - j) + abs(j - k) + abs(k - i), where abs(x) denotes the absolute value of x.
     * 回傳最小good tuple，否則-1
     * 
     * 必須要有3個元素是一樣的
     */
    let ans = Infinity;
    if(nums.length < 2){
      return -1;
    }
    for(let i = 0;i < nums.length;++i) {
      for(let j = i+1;j < nums.length;++j) {
        if(nums[i] === nums[j]){
          for(let k = j+1;k < nums.length;++k) {
            if(nums[j] === nums[k]){
              ans = Math.min(ans,2*(k-i));
             }
          }
        }
      }
    }
    return ans === Infinity ? -1 : ans;
};
let nums = [1,1,2,3,2,1,2]
/*
Output: 8
Explanation:
The minimum distance is achieved by the good tuple (2, 4, 6).
(2, 4, 6) is a good tuple because nums[2] == nums[4] == nums[6] == 2. Its distance is abs(2 - 4) + abs(4 - 6) + abs(6 - 2) = 2 + 2 + 4 = 8.
*/
console.log(minimumDistance(nums));