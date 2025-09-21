'''
1512. Number of Good Pairs

Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:
Input: nums = [1,2,3]
Output: 0

Constraints:
1 <= nums.length <= 100
1 <= nums[i] <= 100
'''
from collections import defaultdict
from typing import Counter
class Solution:
  def numIdenticalPairs(self, nums: list[int]) -> int:
    '''
    給一個數字陣列，計算並回傳在該鎮列中有幾個是good pair

    pair條件:
    nums[i] == nums[j] && i < j
    '''
    # Solution 1.
    # count = 0
    # for key,value in Counter(nums).items():
    #   count+= value * (value - 1) /2 
    # return int(count)

    #Soltiom 2.
    answer = 0
    countMap = defaultdict(int)
    for i in nums:
      countMap[i]+=1

    for i in nums:
      countMap[i]-=1
      answer+=countMap[i]
    return answer

nums = [1,2,3,1,1,3]
# 4
ans = Solution()
print(ans.numIdenticalPairs(nums))