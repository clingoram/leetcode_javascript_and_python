/**
 * 2154. Keep Multiplying Found Values by Two
 * 
 * 初次先尋找original是否在nums內，若不在直接回傳original
 * 若在，則original * 2 = 新的original （重複此步驟直到找不到original為止）
 * 
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    nums.sort((a,b) => a - b);
    for(let i = 0;i < nums.length;++i) {
      if(nums.includes(original)){
        original *= 2;
      }
    }
    return original;

    // solution 2
    // nums.sort((a,b) => a - b);
    // for(const a of nums){
    //   if(a === original){
    //     original*=2;
    //   }
    // }
    // return original;
};
// let nums = [5,3,6,1,12], original = 3;
// 24
// let nums = [2,7,9], original = 4;
// 4
let nums = [8,19,4,2,15,3], original = 2;
// 16
console.log(findFinalValue(nums,original));