/**
 * 3736. Minimum Moves to Equal Array Elements III
 * 
 * 參數為數值陣列，在一次操作中可將任一元素+1
 * 回傳須移動幾次才能將所有元素都變得一樣
 * 
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  // 要先知道nums中最大值是多少，這樣就能知道其他元素跟最大值差多少
  let count = 0;
  let maxEle = Math.max(...nums);
  for(let i = 0;i < nums.length;++i) {
    count += Math.abs(maxEle - nums[i]);
  }
  return count;
};
let nums = [2,1,3];
/*
Output: 3
Explanation:
To make all elements equal:
Increase nums[0] = 2 by 1 to make it 3.
Increase nums[1] = 1 by 1 to make it 2.
Increase nums[1] = 2 by 1 to make it 3.
Now, all elements of nums are equal to 3. The minimum total moves is 3.
*/
console.log(minMoves(nums))