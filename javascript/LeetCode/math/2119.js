/**
 * 2119. A Number After a Double Reversal
 * 
 * 將參數nums反轉2次後，檢查是否還是跟原參數一樣
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
  // 可能遇到的狀況：數字反轉後，前面是0
  let countReverseTimes = 0;
  let copyNum = num;

  while(countReverseTimes !== 2){
    let reverse = copyNum.toString().split("").reverse().join("");
    copyNum = parseInt(reverse);
    countReverseTimes++;
  }
  return copyNum === num;
};
let num = 526;
// true
// let num = 1800;
// false
console.log(isSameAfterReversals(num));