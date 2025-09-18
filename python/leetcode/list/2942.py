'''
  2942. Find Words Containing Character
  Difficulty:Easy
 
  You are given a 0-indexed array of strings words and a character x.
  Return an array of indices representing the words that contain the character x.
  Note that the returned array may be in any order.
 
  Hints:
  1.Use two nested loops.
 
  Example 1:
 
  Input: words = ["leet","code"], x = "e"
  Output: [0,1]
  Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
 
  Example 2:
  Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
  Output: [0,2]
  Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
 
  Example 3:
  Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
  Output: []
  Explanation: "z" does not occur in any of the words. Hence, we return an empty array.
 
 
  Constraints:
  1 <= words.length <=50  1 <=words[i].length <=50  x is a lowercase English letter.  words[i] consists only of lowercase English letters. 

'''
class Solution:
    def findWordsContaining(self, words: list[str], x: str) -> list[int]:
      """
      參數為一個字串陣列words和一個單字參數x，以陣列型態回傳陣列中有哪些元素含有x
      若無，則回傳空陣列
      """
      # Runtime:63 ms(Beats 72.30% of users with Python 3)
      # Memeory: 17.43 mb(Beats 11.73% of users with Python 3)
      result = []
      for i in range(len(words)):
         if x in words[i]:
            result.append(i)
      return result
          
words = ["abc","bcd","aaaa","cbc"]
x = "a"
# [0,2]
ans = Solution()
print(ans.findWordsContaining(words,x))