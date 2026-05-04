/**
 * 1967. Number of Strings That Appear as Substrings in Word
 * 
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    /**
     * 計算patterns中有幾個元素出現在word中
     */
    let count = 0;
    for(let i = 0;i < patterns.length;++i) {
      if(word.includes(patterns[i])){
        count++;
      }
    }
    return count;
};
let patterns = ["a","abc","bc","d"], word = "abc";
/*
Output: 3
Explanation:
- "a" appears as a substring in "abc".
- "abc" appears as a substring in "abc".
- "bc" appears as a substring in "abc".
- "d" does not appear as a substring in "abc".
3 of the strings in patterns appear as a substring in word.
*/
console.log(numOfStrings(patterns,word));

