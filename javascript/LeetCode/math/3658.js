/**
 * 3658. GCD of Odd and Even Sums
 * 
 * GCD 是 最大公因數（Greatest Common Divisor）的縮寫，指的是能夠整除兩個或以上非零整數的最大正整數。 例如，8和12的最大公因數是4，因為4是8和12的公因數中最大的那個
 *
 * sumOdd = 從1開始，n個奇數的總和
 * sumEven = 從1開始，n個偶數總和
 * gcd(sumOdd,sumEven) = answer
 * 
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
  // ans 能夠整除sumOdd & sumEven
  // let sumOdd = [],sumEven = [];
  // for(let i = 1;i <= n*2;i++) {
  //   if(i % 2 === 0 && sumOdd.length <= n){
  //     sumEven.push(i);
  //   }else{
  //     sumOdd.push(i);
  //   }
  // }
  // let odd = sumOdd.reduce((a,b)=>a+b,0);
  // let even = sumEven.reduce((a,b)=>a+b,0);
  // return Math.abs(odd-even);

  // solution 2
  let sumEven = n * (n + 1);
  let sumOdd = n * n;
  return Math.abs(sumOdd - sumEven);
};
let n = 4;
// 4
// Sum of the first 4 odd numbers sumOdd = 1 + 3 + 5 + 7 = 16
// Sum of the first 4 even numbers sumEven = 2 + 4 + 6 + 8 = 20
// Hence, GCD(sumOdd, sumEven) = GCD(16, 20) = 4.
console.log(gcdOfOddEvenSums(n))