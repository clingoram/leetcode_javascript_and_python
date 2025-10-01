from typing import List
from collections import Counter

def maxFrequencyElements(nums: List[int]) -> int:
  '''
  3005. Count Elements With Maximum Frequency
  
  計算每個元素出現的次數，找出最大出現次數的為何，若value符合最大出現次數，則加總該次數
  '''
  ans = 0
  occurences = Counter(nums)
  # 取得Counter後的最大value
  maxValue = max(occurences.values())
  for item, count in occurences.items():
    if count == maxValue:
      ans += count

  return ans
nums = [1,2,2,3,1,4]
# 4
print(maxFrequencyElements(nums))