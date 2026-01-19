/**
 * 66. Plus One
 * 
 * 參數為數值陣列，將該參數+1並以數字陣列回傳
 * 只需要知道最後一個數字是什麼並將它+1
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // 只需要知道最後一個數字是什麼並將它+1
  // 若 +1 位數 >= 2，則拆開

  for(let i = digits.length - 1;i >= 0;--i) {
    if(digits[i] + 1 < 10){
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};
let digits = [1,2,3];
//[1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// let digits = [9];
// [1,0]
// let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
console.log(plusOne(digits));