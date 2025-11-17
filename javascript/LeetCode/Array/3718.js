/**
 * 3718. Smallest Missing Multiple of K
 * 
 * 取得能被k整除且是所有能被k整除的最小數且不在nums中的元素並回傳
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
     // solution 1.Runtime 2 ms.
    //  let divisibleByK = [];
    //  let ans = 0;
    //  for(let i = 1;i < nums.length+2;++i) {
    //     divisibleByK.push(i*k);
    //  }
    //  for(let i = 0;i < divisibleByK.length;++i) {
    //     if(!nums.includes(divisibleByK[i])){
    //       ans = divisibleByK[i];
    //       break;
    //     }
    //  }
    //  return ans;

    // solution 2.Runtime 1 ms.
    //  let map = new Map();
    //  let ans = 0;
    //  for(let i = 0;i < nums.length;++i) {
    //     map.set(nums[i],1);
    //  }
    //  for(let i = 1;i < nums.length+2;++i) {
    //   if(!map.has(i * k)){
    //     ans = i * k;
    //     break;
    //   }
    //  }
    //  return ans;

    // solution 3.
    let set = new Set(nums);
    for(let i = k;;i+=k) {
        if(!set.has(i)){
           return i;
        }
    }
};
// let nums = [1,4,7,10,15], k = 5;
// 5
let nums = [8,2,3,4,6], k = 2;
// 10
// let nums = [99],k = 99;
// 198
// let nums = [2,4,6,8,10],k = 2;
// 12
console.log(missingMultiple(nums,k));