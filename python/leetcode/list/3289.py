from collections import Counter
from typing import List
def getSneakyNumbers(nums: List[int]) -> List[int]:
  '''
  3289. The Two Sneaky Numbers of Digitville
  
  參數為數值陣列，回傳元素出現次數大於2的元素。
  回傳的陣列每個必須是唯一值
  '''
  # use counter，可計算出現次數
  # c = Counter(nums)
  # ans = []
  # for key, value in c.items():
  #   if value == 2:
  #     ans.append(key)
  # return ans

  # solution 2.更簡潔寫法
  c = Counter(nums)
  return [key for key,value in c.items() if value == 2]

nums = [7,1,5,4,3,4,6,0,9,5,8,2]
# [4,5]
print(getSneakyNumbers(nums))