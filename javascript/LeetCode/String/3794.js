/**
 * 3794. Reverse String Prefix
 * 
 * 反轉s中前k個字母並回傳
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
  return s.substring(0,k).split("").reverse().join("") + s.substring(k);
};
// let s = "abcd", k = 2;
// "bacd"
let s = "hey", k = 1;
// "hey"
console.log(reversePrefix(s,k));