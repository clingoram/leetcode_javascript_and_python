/**
 * 2186. Minimum Number of Steps to Make Two Strings Anagram II
 * 
 * 兩個字串參數s & t，在一次操作中，可以加上任一字母至s或t中。
 * 回傳讓s和t變成anagrams的最少步驟數
 * 
 * anagrams:長度一樣、字母一樣但排序可以不一樣
 * 
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  // 檢查是否是anagrams可用：sort、count
  let countOP = 0;
  let mapS = new Map();
  let mapT = new Map();
  // 參數s字母出現次數
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    mapS.has(element) ? mapS.set(element, mapS.get(element) + 1) : mapS.set(element, 1);
  }
  // 參數t字母出現次數
  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    mapT.has(element) ? mapT.set(element, mapT.get(element) + 1) : mapT.set(element, 1);
  }

  // 字母出現幾次就得是幾次
  // t有但s沒有的字母有幾個 (a,s) 2
  // s有但t沒有的字母有幾個 (l,e,e,d,e) 5
  // 因此 2 + 5 = 7
  for(let [key,value] of mapS){
    if(!mapT.has(key)){
      countOP+= value;
    }

  }
  for(let [key,value] of mapT){
    if(!mapS.has(key)){
      countOP+= value;
    }
  }
  return countOP;

  // solution 2.
  // use obj
  // let countOP = 0;
  // let freq = {};
  // for (const element of s) {
  //   freq[element] =  freq[element] || 0) + 1;
  // }
  // for(const element of t) {
  //   if(!freq[element]){
  //     continue;
  //   }
  //   --freq[element];
  //   ++countOP;
  // }
  // return s.length + t.length - countOP * 2;
};
// let s = "leetcode", t = "coats";
/**
 * 7
 * - In 2 steps, we can append the letters in "as" onto s = "leetcode", forming s = "leetcodeas".
 * - In 5 steps, we can append the letters in "leede" onto t = "coats", forming t = "coatsleede".
 * "leetcodeas" and "coatsleede" are now anagrams of each other.
 * We used a total of 2 + 5 = 7 steps.
 * It can be shown that there is no way to make them anagrams of each other with less than 7 steps.
 */
// let s = "cotxazilut",t = "nahrrmcchxwrieqqdwdpneitkxgnt";
// 27
// console.log(minSteps(s,t));