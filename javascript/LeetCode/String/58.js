/**
 * 58. Length of Last Word
 * 
 * 取得最後一個單字的長度，參數內會有空白格
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  // solution 1.
  let temp = [];
  let splitToArr = s.split(" ");
  for(let i = 0;i < splitToArr.length;++i) {
    if(splitToArr[i] !== ""){
      temp.push(splitToArr[i]);
    }
  }
  return temp[temp.length - 1].length;

  // solution 2.
//   let ans = 0;
//   let trim = s.trim();
//   for(let i = trim.length - 1;i >= 0;i--){
//     if(trim[i] !== " "){
//       ans++;
//     }else if(ans > 0){
//       break;
//     }
//   }
//   return ans;
};
let s = "   fly me   to   the moon  ";
// 4
console.log(lengthOfLastWord(s))