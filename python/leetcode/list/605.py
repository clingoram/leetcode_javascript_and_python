"""
605. Can Place Flowers
Difficulty:Easy

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 

Constraints:
1 <= flowerbed.length <= 2 * 104
flowerbed[i] is 0 or 1.
There are no two adjacent flowers in flowerbed.
0 <= n <= flowerbed.length
"""
class Solution:
  def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
    '''
    題目要種花，但花不能重在相鄰的位置上
    給一個只有0和1的數值陣列，陣列中的0代表該元素位置是空的，1則相反。
    花為數值N，表示有N朵花要種，只能種在0的位置上

    回傳在不違反無相鄰花規則的情況下，是否可以在花壇中種植 n 朵新花。
    不需要N朵全種，可以少於N或等於N
    '''
    for i in range(len(flowerbed)):
      if (flowerbed[i] == 0 and n > 0):
        # 位置 = 0 且 n > 0
        flowerbed[i] = 1
        # n-1
        n -= 1
        # 檢查是否連續種
        if (i > 0 and flowerbed[i - 1] != 0):
          flowerbed[i] = 0
          n += 1
        elif (i < len(flowerbed) - 1 and flowerbed[i + 1] != 0):
          flowerbed[i] = 0
          n += 1
    return n == 0

# flowers = [1,0,0,0,1]
# target = 2
# false
flowers = [0,1,0]
target = 1
# false
ans = Solution()
print(ans.canPlaceFlowers(flowers,target))