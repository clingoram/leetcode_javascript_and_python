def compareVersion(version1: str, version2: str) -> int:
  '''
  165. Compare Version Numbers
  參數為兩個字串，其內含有"."，將參數依據"."拆成左右兩部份，從左到右比較每個部份大小。

  If version1 < version2, return -1.
  If version1 > version2, return 1.
  Otherwise, return 0.
  
  若部份的前面有0，則忽略0，取整數
  '''
  v1 = version1.split(".")
  v2 = version2.split(".")
  length = max(len(v1),len(v2))

  for i in range(length):
    num1 = int(v1[i]) if i < len(v1) else 0
    num2 = int(v2[i]) if i < len(v2) else 0

    if num1 == num2:
      continue

    return 1 if num1 > num2 else -1
  return 0

# version1 = "1.2"
# version2 = "1.10"
# -1
version1 = "1.0"
version2 = "1.0.0.0"
print(compareVersion(version1,version2))