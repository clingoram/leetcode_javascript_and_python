"""
這用於python練習，在CMD打上:
python xxx.py(檔案名稱)

就會執行該檔案

如何知道Python version?
python -V
"""
from math import sqrt
from typing import List
from collections import Counter

# from numpy import diff
# module
# import basic.algo.linearSearch
# arr = [2,4,6,8,10]
# target = 8
# 3(return index)
# print(basic.algo.linearSearch.linearSearch(arr,target))

# oop
# from file name(module) import the class.
from oop.Animal import Animal
from oop.Tortoise import Tortoise
from oop.Lion import Lion
from oop.Behavior import move

# greek = Tortoise("福氣",7,"veggie","地中海型陸龜")
# greek.eat()
# greek.hibernation()
# greek.environment()
# greek.attack()
# greek.affend()
# print(greek.specice)
# print(greek.avgWeight(7,5))

# lion = Lion("獅子","未知","肉食")
# lion.eat()
# lion.attack()
# # print(lion.food)
# lion.environment()

'''
1415. The k-th Lexicographical String of All Happy Strings of Length n

A happy string is a string that:
  consists only of letters of the set ['a', 'b', 'c'].
  s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).
For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings and strings "aa", "baa" and "ababbc" are not happy strings.

Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order.

Return the kth string of this list or return an empty string if there are less than k happy strings of length n.

Hint:
 Generate recursively all the happy strings of length n.
 Sort them in lexicographical order and return the kth string if it exists.

Example 1:
Input: n = 1, k = 3
Output: "c"
Explanation: The list ["a", "b", "c"] contains all happy strings of length 1. The third string is "c".

Example 2:
Input: n = 1, k = 4
Output: ""
Explanation: There are only 3 happy strings of length 1.

Example 3:
Input: n = 3, k = 9
Output: "cab"
Explanation: There are 12 different happy string of length 3 ["aba", "abc", "aca", "acb", "bab", "bac", "bca", "bcb", "cab", "cac", "cba", "cbc"]. You will find the 9th string = "cab"
 

Constraints:
1 <= n <= 10
1 <= k <= 100
'''
# def getHappyString(n: int, k: int) -> str:



def getFinalState(nums: List[int], k: int, multiplier: int) -> List[int]:
    '''
  3264. Final Array State After K Multiplication Operations I

  You are given an integer array nums, an integer k, and an integer multiplier.
  You need to perform k operations on nums. In each operation:
    Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first.
    Replace the selected minimum value x with x * multiplier.
  Return an integer array denoting the final state of nums after performing all k operations.

  Hints:
  1. Maintain sorted pairs (nums[index], index) in a priority queue.
  2. Simulate the operation k times.

  Example 1:
  Input: nums = [2,1,3,5,6], k = 5, multiplier = 2
  Output: [8,4,6,5,6]
  Explanation:
    Operation	Result
    After operation 1	[2, 2, 3, 5, 6]
    After operation 2	[4, 2, 3, 5, 6]
    After operation 3	[4, 4, 3, 5, 6]
    After operation 4	[4, 4, 6, 5, 6]
    After operation 5	[8, 4, 6, 5, 6]
  
  Example 2:
  Input: nums = [1,2], k = 3, multiplier = 4
  Output: [16,8]
  Explanation:
    Operation	Result
    After operation 1	[4, 2]
    After operation 2	[4, 8]
    After operation 3	[16, 8]
  

  Constraints:
  1 <= nums.length <= 100
  1 <= nums[i] <= 100
  1 <= k <= 10
  1 <= multiplier <= 5

  3個參數:int array nums.int k & int multiplier
  需在nums上操作K次，每次找出nums中最小值X，若有重複多個最小值出現，則取第一個出現的
  將X汰換成 X * multiplier
  回傳在操作K次上述步驟後的num
  '''

    # solution 1
    # for _ in range(k):
    #   minIndex = 0
    #   for i in range(len(nums)):
    #     if nums[i] < nums[minIndex]:
    #       minIndex =i
    #   nums[minIndex] *= multiplier
    # return nums

    # Solution 2.
    # for _ in range(k):
    #    x = nums.index(min(nums))
    #    nums[x] *= multiplier
    # return nums

    op = 0
    while op < k:
      x = min(nums)
      j = 0
      for i in range(len(nums)):
        if nums[i] < x:
          x = nums[i]
          j = i

      op+=1
      nums[j] *= multiplier

    # while(op < k):
    #   min = newNums[0]
    #   newNums.remove(min)
    #   newNums.append(min * multiplier)
    #   op+=1
    return nums
# nums = [2,1,3,5,6]
# k = 5
# multiplier = 2
# [8,4,6,5,6]
# print(getFinalState(nums,k,multiplier))


'''
2523. Closest Prime Numbers in Range

Given two positive integers left and right, find the two integers num1 and num2 such that:
  left <= num1 < num2 <= right .
  Both num1 and num2 are prime numbers.
  num2 - num1 is the minimum amongst all other pairs satisfying the above conditions.
Return the positive integer array ans = [num1, num2]. If there are multiple pairs satisfying these conditions, return the one with the smallest num1 value. If no such numbers exist, return [-1, -1].

Hints:
1.Use Sieve of Eratosthenes to mark numbers that are primes.
2.Iterate from right to left and find pair with the minimum distance between marked numbers. 

Example 1:
Input: left = 10, right = 19
Output: [11,13]
Explanation: The prime numbers between 10 and 19 are 11, 13, 17, and 19.
The closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].
Since 11 is smaller than 17, we return the first pair.

Example 2:
Input: left = 4, right = 6
Output: [-1,-1]
Explanation: There exists only one prime number in the given range, so the conditions cannot be satisfied.
 

Constraints:
1 <= left <= right <= 106
'''
def closestPrimes(left: int, right: int) -> List[int]:
  '''
  參數為兩個數值，left、right。找出介於left、right的兩個prime number(num1 & num2)
  找出這兩個prime number在相減後必須是所有對中num1值是最小的，若沒有則回傳[-1,-1]
  prime number:只有兩個自然數，1和自己
  '''
  theRange = []
  prev_prime = -1
  a = -1
  b = -1
  min_difference = float("inf")

  for i in range(left,right+1):
    if isPrime(i):
      # if prev_prime != -1:
      #   difference = i - prev_prime
      #   if difference < min_difference:
      #     min_difference = difference
      #     a = prev_prime
      #     b = i
      #   if difference == 1 or difference == 2:
      #     return [prev_prime, i]
      # prev_prime = i
      theRange.append(i)

  # return [a, b] if a != -1 else [-1, -1]

  for i in range(1,len(theRange)):
    difference = theRange[i] - theRange[i-1]
    if difference < min_difference:
      min_difference = difference
      result = [theRange[i-1], theRange[i]]
    # print(theRange[i])
  return result

  # chunks = [theRange[i:i + 2] for i in range(0, len(theRange), 2)]
  # print(theRange)

def isPrime(element:int):
  if element == 1:
      return False

  for i in range(2,element):
    if element % i == 0:
      return False
  return True

left = 10
right = 19
# [11,13]
# 11, 13, 17, and 19.
# print(closestPrimes(left,right))


def replaceDigits(s: str) -> str:
  res = ""
  for i in range(len(s)):
    prev = s[i - 1]
    current = s[i]

    if i % 2 != 0:
      res += chr(ord(prev) + int(current)) 
    else:
      res += s[i]
  
  return res
s = "a1c1e1"
# Output: "abcdef"
# print(replaceDigits(s))


