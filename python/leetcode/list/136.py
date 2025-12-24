def singleNumber(nums: List[int]) -> int:
  '''
  136. Single Number
  '''
  # 找出只出現一次的元素
  # ans = 0
  # for key,value in Counter(nums).items():
  #   if(value == 1):
  #     ans = key
  # return ans

  # solution 2
  ans = 0
  for i in nums:
    ans ^= i
  return ans


nums = [4,1,2,1,2]
# 4
print(singleNumber(nums))