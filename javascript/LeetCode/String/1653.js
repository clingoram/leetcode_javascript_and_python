/**
 * 1653. Minimum Deletions to Make String Balanced
 * 
 * 參數s中只有'a' & 'b'這兩個字母。
 * 刪除任一字母使s balanced，若不存在一對index (i,j) 使得 i < j 且 s[i] = 'b' 且 s[j] = 'a'，則s 是balanced。
 * 回傳至少須刪除幾次(操作幾次)才能使s balanced
 * 
 * 
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
  // balanced string中，b不能出現在a之後
  // no such 'b' at s[i] where s[j] is 'a' and i < j

    // TC:O(N)
    // 計算a,b各自出現幾次
    let countA = 0,countB = 0;
    let minDel = s.length;
    // 先計算a出現幾次
    for(let i = 0;i < s.length;++i) {
      if(s[i] === "a"){
        countA++;
      }
    }
    // 之後再次迴圈，若遇到a則--
    for(let i = 0; i < s.length;++i) {
      if(s[i] === "a"){
        countA--;
      }
      // 不斷更新比較雙方次數
      minDel = Math.min(minDel,countA + countB);

      // 遇到b，++
      if(s[i] === "b"){
        countB++;
      }
    }
    return minDel;
};
let s = "aababbab";
/*Output: 2
Explanation: You can either:
Delete the characters at 0-indexed positions 2 and 6 ("aababbab" -> "aaabbb"), or
Delete the characters at 0-indexed positions 3 and 6 ("aababbab" -> "aabbbb").
*/
console.log(minimumDeletions(s));
