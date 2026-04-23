/**
 * 3678. Smallest Absent Positive Greater Than Average
 * 
 * 從nums中找最小缺少的數字，條件：大於nums中所有元素的平均值
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function(nums) {
    let avg = nums.reduce((a,b) => (a + b) / nums.length);
    let ans = 1;
    while(true){
      if(ans > avg && !nums.includes(ans)){
        return ans;
      }
      ans++;
    }
};
let nums = [3,5];
/*
Output: 6
Explanation:
The average of nums is (3 + 5) / 2 = 8 / 2 = 4.
The smallest absent positive integer greater than 4 is 6.
*/
console.log(smallestAbsent(nums));