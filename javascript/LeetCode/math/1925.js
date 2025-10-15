/**
 * 1925. Count Square Sum Triples
 * 
 * triple = a 二次方 + b 二次方 = c 二次方
 * 
 * Hints:
 * 1.Iterate over all possible pairs (a,b) and check that the square root of a * a + b * b is an integers less than or equal n
 * 2.You can check that the square root of an integer is an integer using binary seach or a builtin function like sqrt
 * 
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
  // solution 1.
  // let ans = 0; 
  // for(let i = 1;i <= n;++i) {
  //   for(let j = 1;j <= n;++j) {
  //     for(let k = 1;k <= n;++k) {
  //       if((i ** 2) + (j ** 2) === (k ** 2)){
  //         ans++;
  //       }
  //     }
  //   }
  // }
  // return ans;


  // solution 2.
  let ans = 0;
  for(let i = 1;i <= n;++i) {
    for(let j = i + 1;j <= n;++j) {
      // a & b
      let pairs = Math.sqrt((i ** 2) + (j ** 2));
      if(Number.isInteger(pairs) && pairs <= n) {
        ans += 2;
      }
    }
  }
  return ans;
};
let n = 5;
// 2
// The square triples are (3,4,5) and (4,3,5).
console.log(countTriples(n));