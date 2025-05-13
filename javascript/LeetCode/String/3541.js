/**
 * 3541. Find Most Frequent Vowel and Consonant
 * 
 * You are given a string s consisting of lowercase English letters ('a' to 'z').
 *
 * Your task is to:
 *  Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
 *  Find the consonant (all other letters excluding vowels) with the maximum frequency.
 *  Return the sum of the two frequencies.
 *
 * Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.
 *
 * The frequency of a letter x is the number of times it occurs in the string.
 *
 * Hints:
 * 1.Use a hashmap
 * 2.Simulate as described
 *
 * Example 1:
 * Input: s = "successes"
 * Output: 6
 * Explanation:
 * The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
 * The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
 * The output is 2 + 4 = 6.
 *
 * Example 2:
 * Input: s = "aeiaeia"
 * Output: 3
 * Explanation:
 * The vowels are: 'a' (frequency 3), 'e' ( frequency 2), 'i' (frequency 2). The maximum frequency is 3.
 * There are no consonants in s. Hence, maximum consonant frequency = 0.
 * The output is 3 + 0 = 3.
 *
 * Constraints:
 * 1 <= s.length <= 100
 * s consists of lowercase English letters only.
 *
 * 找出母音(a,e,i,o,u)和子音各自出現的最大次數為何並將母音和子音相加
 * 
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
  let vowelsCount = new Map();
  let consonantsCount = new Map();
  let vowels = ['a','e','i','o','u'];
  for(let char of s){
    if(vowels.includes(char)){
      vowelsCount.set(char, (vowelsCount.get(char) || 0) + 1);
    }else{
      consonantsCount.set(char,(consonantsCount.get(char) || 0) + 1);
    }
  }
  // 子母音可能是0（s中沒有任何子音或母音）
  let maxVowels = vowelsCount.size !== 0 ? Math.max(...vowelsCount.values()) : 0;
  let maxConsonants = consonantsCount.size !== 0 ? Math.max(...consonantsCount.values()) : 0;
  return maxVowels + maxConsonants;
    
};
// let s = "successes";
// 6
let s = "aeiaeia";
// 3
console.debug(maxFreqSum(s));