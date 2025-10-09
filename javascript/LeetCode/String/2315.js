/**
 * 2315. Count Asterisks
 * 
 * 給一個字串，字串中可能會有"|"和"*"，找出字串中被一組 | 包住的連續 ** 有幾個
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
  // 須判斷字串中是否有連續的"*"符號
  // 拆成陣列，計算一組"|"中有幾個連續"*"

  // solution 1.
  // let splitS = s.split("");
  // let ans = 0;
  // let pairs = false;
  // for(let i = 0;i < splitS.length;++i) {
  //   if(splitS[i] === "|"){
  //     if(pairs){
  //       pairs = false;
  //       continue;
  //     }else{
  //       pairs = true;
  //       continue;
  //     }
  //   }
  //   if(pairs === false && splitS[i] === "*"){
  //     ans++;
  //   }
  // }
  // return ans;


  // solution 2.
  let ans = 0, bars = 0;
  for(let i = 0;i < s.length;++i) {
    // bars必須要一對（偶數）
    if(s[i] === "*" && bars % 2 === 0){
      ans++;
    }
    if(s[i] === "|"){
      bars++;
    }
  }
  return ans;
};
// let s = "l|*e*et|c**o|*de|"
// Output: 2
let s = "yo|uar|e**|b|e***au|tifu|l";
// 5
console.log(countAsterisks(s))