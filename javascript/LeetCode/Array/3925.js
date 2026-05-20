/**
 * 3925. Concatenate Array With Reverse
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    /**
     * 新陣列長度 = nums.length * 2
     * 前n個為nums原有排序，後n個為nums反轉後並將它合併一起成一個陣列
     */
    let ans = [];
    for(let i = 0;i < nums.length;++i) {
      ans.push(nums[i]);
    }
    let reverse = nums.reverse();
    return ans.concat(reverse);
};
let nums = [1,2,3];
/*
Output: [1,2,3,3,2,1]
Explanation:
The first n elements of ans are the same as nums.
For the next n = 3 elements, each element is taken from nums in reverse order:
ans[3] = nums[2] = 3
ans[4] = nums[1] = 2
ans[5] = nums[0] = 1
Thus, ans = [1, 2, 3, 3, 2, 1].
*/
console.log(concatWithReverse(nums));