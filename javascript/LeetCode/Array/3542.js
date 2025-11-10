/**
 * 3542. Minimum Operations to Convert All Elements to Zero
 * 
 * 計算將所有的元素變成0最少需要幾次操作
 * 一次操作中，選子陣列「i,j] (0 <= i <= j < nums.length)，並將
 * [start index i,end index j]
 * 
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let ans = 0;
  let arr = [];
  for(let i = 0;i < nums.length;++i) {
    // 檢查塞入的 element 有沒有 break monoStack 的單線程(遞增or遞減)
    while(arr.length && arr[arr.length - 1] > nums[i]){
      // 如果有，把 stack 元素先做調整
      arr.pop();
    }
    if(nums[i] === 0){
      continue;
    }
    if(!arr.length || arr[arr.length - 1] < nums[i]) {
      ans++;
      arr.push(nums[i]);
    }
  }
  return ans;
};
let nums = [3,1,2,1];
/*
3
Select subarray [1,3] (which is [1,2,1]), where the minimum non-negative integer is 1. Setting all occurrences of 1 to 0 results in [3,0,2,0].
Select subarray [2,2] (which is [2]), where the minimum non-negative integer is 2. Setting all occurrences of 2 to 0 results in [3,0,0,0].
Select subarray [0,0] (which is [3]), where the minimum non-negative integer is 3. Setting all occurrences of 3 to 0 results in [0,0,0,0].
Thus, the minimum number of operations required is 3.
*/
console.log(minOperations(nums));
