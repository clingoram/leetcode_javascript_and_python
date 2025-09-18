'''
875. Koko Eating Bananas
Difficulty:Medium

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.


Example 1:
Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:
Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:
Input: piles = [30,11,23,4,20], h = 6
Output: 23
 

Constraints:
1 <= piles.length <= 104
piles.length <= h <= 109
1 <= piles[i] <= 109
'''
from math import ceil, floor
class Solution:
  def minEatingSpeed(self, piles: list[int], h: int) -> int:
    '''
     給定一個有 n 堆香蕉的陣列 piles (第 i 堆的數量為 piles[i])，以及限時 h 小時，需要找出最少每小時需要吃的香蕉數量，才能在時限內把所有的香蕉吃完。
    '''
    left = 1
    right = max(piles)
    while left <= right:
      k = (left + right) // 2
      hours = 0
      for i in piles:
        hours += ceil(i / k)

      if hours <= h:
        right = k 
      else:
        left = k + 1
    return right
       

piles = [3,6,7,11]
h = 8
# 4
ans = Solution()
print(ans.minEatingSpeed(piles,h))