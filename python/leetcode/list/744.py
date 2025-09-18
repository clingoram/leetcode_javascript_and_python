'''
744. Find Smallest Letter Greater Than Target
Difficulty:Easy

You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.
Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

Example 1:

Input: letters = ["c","f","j"], target = "a"
Output: "c"
Explanation: The smallest character that is lexicogrpahically greater than 'a' in letters is 'c'.
Example 2:

Input: letters = ["c","f","j"], target = "c"
Output: "f"
Explanation: The smallest character that is lexicogrpahically greater than 'c' in letters is 'f'.
Example 3:

Input: letters = ["x","x","y","y"], target = "z"
Output: "x"
Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
 

Constraints:

2 <= letters.length <= 104
letters[i] is a lowercase English letter.
letters is sorted in non-decreasing order.
letters contains at least two different characters.
target is a lowercase English letter.

'''
import math
class Solution:
  def nextGreatestLetter(self, letters: List[str], target: str) -> str:
    # 給一個字串陣列，找出該陣列中最小但又比target大的element，並回傳
    # lowercasae letter
    # ascii code
    # use ord('alphabet') => number or chr(number) => alphabet

    left = 0
    right = len(letters) - 1
    # ordTarget = ord(target)
    # list = []
    # minest = 0

    # loop
    # for alphabet in letters:
    #   minOrdTarget = ord(alphabet)
    #   list.append(minOrdTarget)
    #   minest = min(list)
    
    if(target < letters[left] or target >= letters[right]):
      print(letters[left])

    while(left <= right):
      middle = (left + right)

      # if(list[middle] == minest and list[middle] > ordTarget):
      #   print(chr(minest))
      #   break
      # if(list[middle] != minest and list[middle] < ordTarget):
      #   left = middle+1
      
      # if(list[middle] != minest and list[middle] > ordTarget):
      #   right = middle-1

      if(target < letters[middle]):
        right = middle-1
      elif(target >= letters[middle]):
        left = middle+1
        
    print(letters[left])

letters = ["c","f","j"]
target = "a"
# "c"
sol = Solution()
sol.nextGreatestLetter(letters,target)