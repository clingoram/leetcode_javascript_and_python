'''
1347. Minimum Number of Steps to Make Two Strings Anagram
  Difficulty:Medium
  
  You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.
  Return the minimum number of steps to make t an anagram of s.
  An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.
  
  Hints:
  1.Count the frequency of characters of each string.
  2.Loop over all characters if the frequency of a character in t is less than the frequency of the same character in s 
  then add the difference between the frequencies to the answer. 
  
  Example 1:
  Input: s = "bab", t = "aba"
  Output: 1
  Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.
  
  Example 2:
  Input: s = "leetcode", t = "practice"
  Output: 5
  Explanation: Replace 'p', 'r', 'a', 'i' and 'c' from t with proper characters to make t anagram of s.
  
  Example 3:
  Input: s = "anagram", t = "mangaar"
  Output: 0
  Explanation: "anagram" and "mangaar" are anagrams. 
   
  Constraints:
  1 <= s.length <= 5  104
  s.length == t.length
  s and t consist of lowercase English letters only.
'''
from typing import Counter
class Solution:
  def minSteps(self, s: str, t: str) -> int:
    return sum((Counter(s) - Counter(t)).values())
     
s = "bab"
t = "aba"
# 1
ans = Solution()
print(ans.minSteps(s,t))