/*
1464. Maximum Product of Two Elements in an Array
Difficulty:Easy

Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

Use brute force: two loops to select i and j, then select the maximum value of (nums[i]-1)*(nums[j]-1).

Note:
1.integer array
2.i and j are the indices of that array
3.return the Max value of (nums[i]-1)*(nums[j]-1)

nums = [3,4,5,2]
index : 0 1 2 3
=> if i=1 and j=2
=> num(4-1) * nums(5-1) = 3*4=12

排序後找出該array中最大數和第二大的數，各減一後相加


Example 1:

Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
Example 2:

Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
Example 3:

Input: nums = [3,7]
Output: 12
 

Constraints:

2 <= nums.length <= 500
1 <= nums[i] <= 10^3

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    // time O(n log n) space O(1)
    if (nums.length < 2) {
        return parseInt(nums, 10);
    }
    // console.log(nums.length);// return 4
    const array_sort = nums.sort((a, b) => a - b); // return [1,4,5,5];
    const lastNumber = array_sort[nums.length - 1] // return 5
    const secondLastNumber = array_sort[nums.length - 2]; // return 5

    return (lastNumber - 1) * (secondLastNumber - 1);

    // solution 2.
    // 取得第一、第二大value，並將該陣列做切割…只取前兩個
    // let sortNums = nums.sort((a,b) => b - a).slice(0,2);
    // // 第一大元素
    // let i = sortNums[0];
    // // 第二大元素
    // let j = sortNums[1];
    // return (i - 1) * (j - 1);

};
const nums = [1, 5, 4, 5];
// return 16 
// cause i=1;j=3 => nums(5-1)*nums(5-1) = 4*4 =16 
console.log(`The result of maxProduct is ${maxProduct(nums)}`);