from typing import List

def transformArray(nums: List[int]) -> List[int]:
  '''
  3467. Transform Array by Parity

  將nums的element是偶數的替換成0
  將nums的的element是奇數位替換成1
  遞增排序結果
  '''
  # solution 1
  # res = []
  # for i in range(len(nums)):
  #   if nums[i] % 2 == 0:
  #     res.append(0)
  #   else:
  #     res.append(1)
  # res.sort()
  # return res


  # solution 2.
  # 2 pointers
  res = [0] * len(nums)
  left = 0
  right = len(nums) - 1

  for i in nums:
    if i % 2 == 0:
      res[left] = 0
      left+=1
    else:
      res[right] = 1
      right-=1
  return res


nums = [1,5,1,4,2]
# [0,0,1,1,1]
print(transformArray(nums))