from typing import List
def maxOperations(nums: List[int]) -> int:
    '''
    3038. Maximum Number of Operations With the Same Score I
    '''
    count = 1
    firstTwoEleSum = nums[0] + nums[1]
    for i in range(2,len(nums) - 1,2):
        if nums[i] + nums[i+1] == firstTwoEleSum:
            count+=1
        else:
            break
    return count

nums = [3,2,1,4,5]
print(maxOperations(nums))