/**
 * 1137. N-th Tribonacci Number
 * 
 * The Tribonacci sequence Tn is defined as follows: 
 * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 * 
 * Given n, return the value of Tn.
 * 
 * Hints:
 * 1.Make an array F of length 38, and set F[0] = 0, F[1] = F[2] = 1.
 * 2.Now write a loop where you set F[n+3] = F[n] + F[n+1] + F[n+2], and return F[n].
 * 
 * Example 1:
 * Input: n = 4
 * Output: 4
 * Explanation:
 * T_3 = 0 + 1 + 1 = 2
 * T_4 = 1 + 1 + 2 = 4
 * 
 * Example 2:
 * Input: n = 25
 * Output: 1389537
 *  
 * 
 * Constraints:
 * 0 <= n <= 37
 * The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
 * 
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  // F[0] = 0, F[1] = F[2] = 1
  let dp = [0,1,1];
  for(let i = 3;i <= n;i++) {
    dp[i % 3] = dp[0] + dp[1] + dp[2];
  }
  return dp[n % 3];
};
let n = 4;
console.log(assert.strictEqual(tribonacci(n),4));