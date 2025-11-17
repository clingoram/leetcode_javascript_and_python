/**
 * 3461. Check If Digits Are Equal in String After Operations I
 * 
 * 重複步驟直到參數字串只剩2位數
 * 
 * 從左邊開始的第一位數跟第二位數相加再 % 10 = 新的左邊第一位數，第二位數跟後面一位數相加再 %10 = 新的左邊第二位數，以此類推形成新的s
 * 將新的s再跟上面的步驟一樣直到剩下2位數，並比較這兩位數是否一樣
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
  while(s.length > 2){
    let newS = "";
    for(let i = 0;i < s.length - 1;++i) {
      let sum = (parseInt(s[i]) + parseInt(s[i + 1])) % 10;
      newS += sum.toString();
    }
    s = newS;
  }
  return s[0] === s[1];
};
let s = "3902";
/**
 * true
 * Initially, s = "3902"
 * First operation:
 * (s[0] + s[1]) % 10 = (3 + 9) % 10 = 2
 * (s[1] + s[2]) % 10 = (9 + 0) % 10 = 9
 * (s[2] + s[3]) % 10 = (0 + 2) % 10 = 2
 * s becomes "292"
 * 
 * Second operation:
 * (s[0] + s[1]) % 10 = (2 + 9) % 10 = 1
 * (s[1] + s[2]) % 10 = (9 + 2) % 10 = 1
 * s becomes "11"
 * Since the digits in "11" are the same, the output is true.
 */
console.log(hasSameDigits(s));