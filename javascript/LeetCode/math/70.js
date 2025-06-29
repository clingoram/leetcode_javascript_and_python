/**
 * 70. Climbing Stairs
 * 
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *  
 * Hints:
 * 1.To reach nth step, what could have been your previous steps? (Think about the step sizes)
 * 
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 * 
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *  
 * Constraints:
 * 1 <= n <= 45
 * 
 *
 * 一次只能走一步，或是走兩步的情況下，有多少種方式可以爬到 n 的階梯？
 * 使用DP解
 * 
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 找出規律
  // 遞迴 TLE (X)
  // if(n === 1 || n === 0){
  //   return 1;
  // }
  // return climbStairs(n - 1) + climbStairs(n - 2);

  // dp. Tabulation Approach
  if(n === 1 || n === 0){
    return 1;
  }
  let dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;
  for(let i = 2;i <= n;i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n]
};
let n = 3;
console.log(assert.strictEqual(climbStairs(n),3));