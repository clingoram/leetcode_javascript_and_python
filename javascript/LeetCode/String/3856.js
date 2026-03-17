/**
 * 3856. Trim Trailing Vowels
 * 
 * 移除s中後半部的母音
 *
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function(s) {
  /**
   * 從後面開始檢查每個字元是否是母音，若是，則移除並繼續往前找直到非母音為止
   */

  let splitS = s.split("").reverse();
  let i = 0;
  while(splitS[i] === 'a' || splitS[i] === 'e' || splitS[i] === 'i' || splitS[i] === 'o' || splitS[i] === 'u'){
    splitS.shift();
  }
  return splitS.reverse().join("");
};
// let s = "idea";
//"id"
// let s = "day";
let s = "aeiou";
console.log(trimTrailingVowels(s));