from typing import List
def sumDivisibleByK(nums: List[int], k: int) -> int:
  '''
  3712. Sum of Elements With Frequency Divisible by K
  '''
  ans = 0
  counts = {}
  for i in nums:
    counts[i] = counts.get(i, 0) + 1

  for key,value in counts.items():
    if value % k == 0:
      ans += key * value
  return ans

nums = [1,2,2,3,3,3,3,4]
k = 2
print(sumDivisibleByK(nums,k))