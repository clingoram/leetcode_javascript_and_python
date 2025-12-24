/**
 * 3432. Count Partitions with Even Sum Difference
 * 
 * You are given an integer array nums of length n.
 * A partition is defined as an index i where 0 <= i < n - 1, splitting the array into two non-empty subarrays such that:
 *  Left subarray contains indices [0, i].
 *  Right subarray contains indices [i + 1, n - 1].
 * Return the number of partitions where the difference between the sum of the left and right subarrays is even.
 * 
 * Hints:
 * 1.If the parity of the sum is even, the partition is valid; otherwise, there is no partition. 
 * 
 * Example 1:
 * Input: nums = [10,10,3,7,6]
 * Output: 4
 * Explanation:
 * The 4 partitions are:
 * [10], [10, 3, 7, 6] with a sum difference of 10 - 26 = -16, which is even.
 * [10, 10], [3, 7, 6] with a sum difference of 20 - 16 = 4, which is even.
 * [10, 10, 3], [7, 6] with a sum difference of 23 - 13 = 10, which is even.
 * [10, 10, 3, 7], [6] with a sum difference of 30 - 6 = 24, which is even.
 * 
 * Example 2:
 * Input: nums = [1,2,2]
 * Output: 0
 * Explanation:
 * No partition results in an even sum difference.
 * 
 * Example 3:
 * Input: nums = [2,4,6,8]
 * Output: 3
 * Explanation:
 * All partitions result in an even sum difference. 
 * 
 * Constraints:
 * 2 <= n == nums.length <= 100
 * 1 <= nums[i] <= 100
 */
/**
 * 將陣列拆成兩部分，左邊[0,i]，右邊[i + 1,n - 1]，其中n為陣列長度
 * 左右兩邊元素各自相加後相減，計算 左 - 右 = 偶數的操作次數
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function (nums) {
  // 左右皆不斷更新
  // let right = 0;
  // let left = 0;
  // // 加總後的值
  // let sum = 0;
  // // 操作次數
  // let count = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   sum += nums[i];
  // }
  // for (let i = 0; i < nums.length - 1; i++) {
  //   left += nums[i];
  //   // 總值 - 左邊 = 右邊
  //   right = sum - left;

  //   // 檢查兩邊是否都是偶數
  //   if ((left % 2) === (right % 2)) {
  //     count++;
  //   }
  // }
  // return count;

  // solution 2.
  let sum = nums.reduce((a,b) => a + b);
  let count = 0;
  let right = 0, left = 0;
  for(let i = 0;i < nums.length;++i) {
    // 左邊的元素會越來越多，右邊則會變少
    left += nums[i];
    right = sum - left;

    if(right % 2 === 0 && left % 2 === 0){
      count++;
    }
  }
  return count;
};
let nums = [10, 10, 3, 7, 6];
// 4
console.log(countPartitions(nums));