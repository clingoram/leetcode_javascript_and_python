/**
 * 3634. Minimum Removals to Balance Array
 * 
 * balanced條件 = 最大元素 <= 最小元素 * k值
 * 可移除任一元素，回傳要移除幾個元素才能達成balanced這條件
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function(nums, k) {
  nums.sort((a,b) => a - b);
  let i = 0;
  let count = 0;
  for(let j = 0;j < nums.length;++j) {
    // 2 pointers.i & j
    while(nums[j] > nums[i] * k){
      i++;
    }
    count = Math.max(count, j - i + 1);
  }
  return nums.length - count;
};
let nums = [1,6,2,9], k = 3;
// 2
// Remove nums[0] = 1 and nums[3] = 9 to get nums = [6, 2].
// Now max = 6, min = 2 and max <= min * k as 6 <= 2 * 3. Thus, the answer is 2.
console.log(minRemoval(nums,k));