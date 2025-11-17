/**
 * 2273. Find Resultant Array After Removing Anagrams
 * 
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let res = [];
    let prevStr = "";
    for(let i = 0;i < words.length;++i) {
      let s = words[i].split("").sort().join("");

      if (s !== prevStr) {
        res.push(words[i]);
        prevStr = s;
      }
    }
    return res;
};
let w = ["abba","baba","bbaa","cd","cd"];
// ["abba","cd"]
console.log(removeAnagrams(w));