/**
 * 91. Decode Ways
 * 
 * You have intercepted a secret message encoded as a string of numbers. The message is decoded via the following mapping:
 * "1" -> 'A'
 * "2" -> 'B'
 * ...
 * "25" -> 'Y'
 * "26" -> 'Z'
 * However, while decoding the message, you realize that there are many different ways you can decode the message because 
 * some codes are contained in other codes ("2" and "5" vs "25").
 * 
 * For example, "11106" can be decoded into:
 * "AAJF" with the grouping (1, 1, 10, 6)
 * "KJF" with the grouping (11, 10, 6)
 * The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).
 * Note: there may be strings that are impossible to decode.
 * 
 * Given a string s containing only digits, return the number of ways to decode it. If the entire string cannot be decoded in any valid way, return 0.
 * The test cases are generated so that the answer fits in a 32-bit integer.
 * 
 * Example 1:
 * Input: s = "12"
 * Output: 2
 * Explanation:
 * "12" could be decoded as "AB" (1 2) or "L" (12).
 * 
 * Example 2:
 * Input: s = "226"
 * Output: 3
 * Explanation:
 * "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
 * 
 * Example 3:
 * Input: s = "06"
 * Output: 0
 * Explanation:
 * "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06"). In this case, the string is not a valid encoding, so return 0.
 * 
 *  
 * Constraints:
 * 1 <= s.length <= 100
 * s contains only digits and may contain leading zero(s).
 * 
 * 依據給的參數，把它拆開，看會符合哪些字母，回傳那些字母共幾個
 * A => 1; B => 2 C => 3 ...Z => 26
 * 
 * EG. "23" => 可拆成2、3、23 => B、C、W => 3
 * 那些字母的數字就算拆開也必須符合參數
 * 參數可能會有0開頭，回傳0
 * 
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  // Dynamic Programming
  // https://www.geeksforgeeks.org/introduction-to-dynamic-programming-data-structures-and-algorithm-tutorials/
  if(s.length === 0 || s[0] === "0"){
    return 0;
  }
  const dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for(let i = 2;i <= s.length ;i++) {
    let first = parseInt(s[i - 1]);
    let second = parseInt(s.substring(i - 2,i));

    if(first >= 1 && first <= 9){
      dp[i] += dp[i - 1]; 
    }
    if(second >= 10 && second <= 26){
      dp[i] += dp[i - 2];
    }
  }
  return dp[s.length];
};
let s = "12";
// 2
console.log(assert.strictEqual(numDecodings(s),2));