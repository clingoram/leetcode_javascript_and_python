/**
 * 2099. Find Subsequence of Length K With the Largest Sum
 * 
 * You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.
 * Return any such subsequence as an integer array of length k.
 * A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
 * 
 * Hints:
 * 1.From a greedy perspective, what k elements should you pick?
 * 2.Could you sort the array while maintaining the index?
 *  
 * Example 1:
 * Input: nums = [2,1,3,3], k = 2
 * Output: [3,3]
 * Explanation:
 * The subsequence has the largest sum of 3 + 3 = 6.
 * 
 * Example 2:
 * Input: nums = [-1,-2,3,4], k = 3
 * Output: [-1,3,4]
 * Explanation: 
 * The subsequence has the largest sum of -1 + 3 + 4 = 6.
 * 
 * Example 3:
 * Input: nums = [3,4,3,3], k = 2
 * Output: [3,4]
 * Explanation:
 * The subsequence has the largest sum of 3 + 4 = 7. 
 * Another possible subsequence is [4, 3].
 *  
 * 
 * Constraints:
 * 1 <= nums.length <= 1000
 * -105 <= nums[i] <= 105
 * 1 <= k <= nums.length
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
  // 參數為一個數值陣列nums和數值k，回傳長度為k的陣列元素，該陣列元素加總是最大值且必須符合原有陣列元素順序
  // 須依照原有的index 排序
  if(nums.length === k){
    return nums;
  }
  let arr = [];
  let map = new Map();
  let count = 0;
  for(let i = 0;i < nums.length;i++) {
    map.set(i,nums[i]);
  }
  // {oringinal index => element}
  // 保留原有的index，sort by value desc.
  const sortByValue = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  for(const [key,value] of sortByValue) {
    if(count < k){
      arr[key] = value;
    }
    count++;
  }
  return arr.filter((a) => a !== undefined);
};
let nums = [-1,-2,3,4], k = 3;
// [-1,3,4]
console.log(maxSubsequence(nums,k));