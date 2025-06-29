/**
 * 2200. Find All K-Distant Indices in an Array
 * 
 * need : nums[j] === key && Math.abs(i - j) <= k;
 * 
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
  // For every occurrence of key in nums, find all indices within distance k from it.
  // Use a hash table to remove duplicate indices.
  let result = [];
  for(let i = 0;i < nums.length;i++) {
    for(let j = 0;j < nums.length;j++) {
        if(nums[j] === key && Math.abs(i - j) <= k){
            result.push(i);
            break;
        }
    }
  }
  return result;
};
let nums = [3,4,9,1,3,9,5], key = 9, k = 1;
// [1,2,3,4,5,6]
console.log(findKDistantIndices(nums,key,k));