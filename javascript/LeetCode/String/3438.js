/**
 * 3438. Find Valid Pair of Adjacent Digits in String
 * 
 * Hints:
 * 1.Use a HashMap to count the frequency of each digit.
 * 
 * 
 * 找出相鄰但不相等的組合，每個數字必須出現的次數 = 該數字，回傳從左邊開始找起符合的第一組，若沒有則傳空字串
 * 例如：2必須在s中出現2次，3必須出現3次
 * @param {string} s
 * @return {string}
 */
var findValidPair = function(s) {
  // hash map
  // pair(a & b) 須不相同數字，index 相鄰
  let hash = new Map();
  let result = "";
  for(let char of s){
    hash.set(char, (hash.get(char) || 0) + 1);
  }
  for(let i = 0;i < s.length;i++) {
    let first = hash.get(s[i]);
    let second = hash.get(s[i+1]);
    if((first === Number(s[i])) && (second === Number(s[i+1])) && s[i] !== s[i+1]){
      return s[i] + s[i+1];
    }
  }
  return "";
};
let s = "2523533";
// "23"
// let s = "22";
// let s = "16";
//""
// let s = "1522";
console.debug(findValidPair(s));