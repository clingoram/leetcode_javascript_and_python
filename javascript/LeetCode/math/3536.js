/**
 * 3536. Maximum Product of Two Digits
 * 
 * 參數為一正數，將它拆成開後，各位數相乘取最大值
 * 
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
  let splet = n.toString().split("");
  splet.sort((a,b) => b - a);
  let max = [];
  for(let i = 0;i < splet.length - 1;i++) {
    max.push(Number(splet[i]) * Number(splet[i+1]));
  }
  return Math.max(...max);
};
let n = 124;
// 8
console.log(maxProduct(n));