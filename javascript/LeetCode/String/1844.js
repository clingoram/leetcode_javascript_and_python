/**
 * 1844. Replace All Digits with Characters
 * 
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
  const reg = new RegExp('^[0-9]+$');
    // 數字前面的一個字母表示該字母要往後增加幾個才能變成新字母。a2 => a後面的第2個字母，回傳ac
    // 數字所在index都是奇數
    let res = "";
    for(let i = 0;i < s.length;++i) {
      // 前一個（字母）
      let prev = s[i - 1];
      // 目前所在位置（數字）
      let next = s[i];
      if(i % 2 !== 0){
        // char.charCodeAt() 取得ascii
        // ascii 轉字母 String.fromCharCode(ascii)
        res += String.fromCharCode(prev.charCodeAt() + parseInt(next))
      }else{
        res += s[i];
      }
    }
    return res;
};
let s = "a1c1e1"
// Output: "abcdef"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('c',1) = 'd'
// - s[5] -> shift('e',1) = 'f'
console.log(replaceDigits(s));