/**
 * 2654. Minimum Number of Operations to Make All Array Elements Equal to 1
 * 
 * GCD = 最大公因數」（Greatest Common Divisor）
 * 陣列元素可操作數次，選任一index i (0 <= i < nums.length - 1)並取得nums[i] or nums[i + 1]的GCD
 * 若可讓每個元素都=1的話，回傳1，否則-1
 * 
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let g = 0,nums1 = 0;

  function mygcd(x,y){
    // 求x & y 的最大公約數
    // x & y 可能是很大的數
    if (y === 0) {
      return x;
    }
    return mygcd(y, x % y);
  }

  for(const a of nums) {
    if(a === 1) {
      nums1++;
    }
    g = mygcd(g,a);
  }
  if(nums1 > 0) {
    return nums.length - nums1;
  }
  if(g > 1) {
    return -1;
  }

  let minLen = nums.length;
  for (let i = 0; i < nums.length; ++i) {
    let currentGcd = 0;
    for (let j = i; j < nums.length; ++j) {
      currentGcd = mygcd(currentGcd, nums[j]);
      if(currentGcd === 1) {
        minLen = Math.min(minLen, j - i + 1);
        break;
      }
    }
  }
  return minLen + nums.length - 2;

};
// let nums = [2,6,3,4];
//  4
// Explanation: We can do the following operations:
// - Choose index i = 2 and replace nums[2] with gcd(3,4) = 1. Now we have nums = [2,6,1,4].
// - Choose index i = 1 and replace nums[1] with gcd(6,1) = 1. Now we have nums = [2,1,1,4].
// - Choose index i = 0 and replace nums[0] with gcd(2,1) = 1. Now we have nums = [1,1,1,4].
// - Choose index i = 2 and replace nums[3] with gcd(1,4) = 1. Now we have nums = [1,1,1,1].
let nums = [1,1];
// 0
console.log(minOperations(nums));