/**
 * 3038. Maximum Number of Operations With the Same Score I
 * 
 * 以陣列前兩個元素為一組做加總為一步驟，檢查下一組的加總是否跟前一組一樣，若不是，則回傳結果是一樣的步驟有幾個
 * 要能夠取得連續加總值一樣
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    let count = 1;
    let firstTwoEleSum = nums[0] + nums[1];
    for(let i = 2;i < nums.length - 1;i+=2) {
      if(nums[i] + nums[i+1] === firstTwoEleSum){
        count++;
      }else{
        break;
      }
    }
    return count;
};
let nums = [1,5,3,3,4,1,3,2,2,3];
// 2
console.log(maxOperations(nums));