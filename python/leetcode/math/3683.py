from typing import List
import math

'''
3683. Earliest Time to Finish One Task

task = [start time,finsh time]
回傳task最早完成的時間
'''
def earliestTime(tasks: List[List[int]]) -> int:
  ans = math.inf
  for i in range(len(tasks)):
    ans = min(ans,tasks[i][0] + tasks[i][1])

  return ans

tasks = [[1,6],[2,3]]
# 5
print(earliestTime(tasks))