'''
3407. Substring Matching Pattern

You are given a string s and a pattern string p, where p contains exactly one '*' character.
The '*' in p can be replaced with any sequence of zero or more characters.
Return true if p can be made a substring of s, and false otherwise.

Hints:
1. Divide the pattern in two strings and search in the string.

Example 1:
Input: s = "leetcode", p = "ee*e"
Output: true
Explanation:
By replacing the '*' with "tcod", the substring "eetcode" matches the pattern.

Example 2:
Input: s = "car", p = "c*v"
Output: false
Explanation:
There is no substring matching the pattern.

Example 3:
Input: s = "luck", p = "u*"
Output: true
Explanation:
The substrings "u", "uc", and "uck" match the pattern.

Constraints:
1 <= s.length <= 50
1 <= p.length <= 50 
s contains only lowercase English letters.
p contains only lowercase English letters and exactly one '*'

參數為一個字串s和字串p，p內有一個"*"符號，而該符號可被替換成任一或多個字母
若p的*號在替換成字母後可變成s的子字串，則回傳true
否則false
'''
def hasMatch(s: str, p: str) -> bool:
  #  將字串拆成兩部分再搜尋
  left,right = p.split("*")
  left_part = s.find(left)
  right_part = s.rfind(right)

  if left_part == -1 or right_part == -1:
    return False
  return left_part + len(left) <= right_part  

s = "luck"
p = "u*"
# True
# 將s的tcod塞進p的*內，p等同是s的子字串
print(hasMatch(s,p))