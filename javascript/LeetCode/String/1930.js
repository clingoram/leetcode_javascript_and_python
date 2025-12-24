/**
 * 1930. Unique Length-3 Palindromic Subsequences
 * 
 * 回傳屬於s迴文的子字串
 *
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    // 只能有3個字母，第一個字母和最後一個字母是一樣的，唯獨中間字母不同 = 迴文
    // 會有一個字母出現至少2次 
    
    // solution 1.
    // let ans = 0;
    // let set = new Set(s);
    // for(const char of set) {
    //   let start = s.indexOf(char);
    //   let end = s.lastIndexOf(char);

    //   if(start < end){
    //     ans += new Set(s.slice(start + 1, end)).size;
    //   }
    // }
    // return ans;

    // solution 2.
    let map = new Map();
    let ans =0;
    for(let i = 0;i < s.length;++i) {
      if (!map.has(s[i])) {
        map.set(s[i], []);
      }
      map.get(s[i]).push(i);
    }
    console.log(map)
    for(const [char,index] of map) {
        const start = index[0];
        const end = index[index.length - 1];
        if (end - start <= 1) {
          continue;
        }

        const set = new Set();
        for (let i = start + 1; i < end; i++) {
          set.add(s[i]);
        }
        ans += set.size;
    }
    return ans;
};
// let s = "aabca";
/**
 * 3
 * The 3 palindromic subsequences of length 3 are:
 * "aba" (subsequence of "aabca")
 * "aaa" (subsequence of "aabca")
 * "aca" (subsequence of "aabca")
 */
// let s = "uuuuu";
// 1
let s ="ckafnafqo"
// 4
console.log(countPalindromicSubsequence(s));