/**
 * 242. Valid Anagram
 * 
 * 在兩個字串參數字母重新排列的情況下，是否可以構成Anagram
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // solutipon 1.
  // let splitS = s.split("").sort();
  // let splitT = t.split("").sort();
  // return splitS.join("") === splitT.join("");

  // hash map
  if (s.length !== t.length) {
    return false;
  }
  let map = new Map();
  for(let i = 0;i < s.length;i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  for(let i = 0;i < t.length;i++) {
    if(!map.has(t[i]) || map.get(t[i]) === 0){
      return false;
    }
    map.set(t[i], map.get(t[i]) - 1);
  }
  return true;
};
let s = "aacc", t = "ccac"
// false
console.log(isAnagram(s,t));