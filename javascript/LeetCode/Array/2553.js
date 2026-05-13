/**
 * 2553. Separate the Digits in an Array
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    /*
    將參數元素依照位數拆開之後依照原本的順序合併
    */
    // solution 1.
    // const ans = [];
    // for(let i = 0;i < nums.length;++i) {
    //   const temp = [];
    //   while(nums[i] > 0){
    //     temp.push(nums[i] % 10);
    //     nums[i] = Math.floor(nums[i] / 10);
    //   }
    //   for(let j = temp.length - 1;j >= 0;j--){
    //     ans.push(temp[j])
    //   }
    // }
    // return ans;

    // solution 2.
    // Reverse Traversal
    const ans = [];
    for(let i = nums.length - 1;i >= 0 ;i--){
      while(nums[i] > 0){
        ans.push(nums[i] % 10);
        nums[i] = Math.floor(nums[i] / 10);
      }
    }
    ans.reverse();
    return ans;
};
let nums = [13,25,83,77];
/*
Output: [1,3,2,5,8,3,7,7]
Explanation: 
- The separation of 13 is [1,3].
- The separation of 25 is [2,5].
- The separation of 83 is [8,3].
- The separation of 77 is [7,7].
answer = [1,3,2,5,8,3,7,7]. Note that answer contains the separations in the same order.
*/
console.log(separateDigits(nums));