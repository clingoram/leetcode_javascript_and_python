/**
 * 3442. Maximum Difference Between Even and Odd Frequency I
 * 
 * 
 * 給一個字串參數s，找出字串中各字母出現次數為最小出現次數的偶數(even)和最大出現次數的奇數(odd)的值並相減取得差，返回差值。
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
  // freq
  let obj = {};
  let maxOdd = 1;
  let minEven = s.length;
  [...s].forEach(element => {
    obj[element] ? obj[element]++ : obj[element] = 1;
  });
  for(const [key,value] of Object.entries(obj)) {
    if(value % 2 === 0){
      minEven = Math.min(minEven,value);
    }else{
      maxOdd = Math.max(maxOdd,value);
    }
  }
  return maxOdd - minEven;
};
let s = "aaaaabbc";
// 3
console.log(maxDifference(s));