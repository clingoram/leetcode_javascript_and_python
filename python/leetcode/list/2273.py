from typing import List
def removeAnagrams(words: List[str]) -> List[str]:
  '''
  2273. Find Resultant Array After Removing Anagrams
  在一次操作中，選擇任何一個索引值 i 使得 0 < i < words.length 且 words[i - 1] 與 words[i] 互相為易位構詞（Anagram），
  並將 words[i] 從 words 中刪除。只要你可以選擇滿足這些條件的索引值，持續執行此操作。
  回傳執行所有操作後的 words。可以證明在每一次操作以任意順序選擇這些索引值將得到相同的結果。


  直接掃過一次 words，只要遇到 words[i] 與 words[i - 1] 是易位構詞就把 words[i] 刪掉即可。
  '''
  res = []
  s = ""
  for i in range(0,len(words)):
    split = "".join(sorted(words[i]))
    if s != split:
      res.append(words[i])
      s = split

  return res
w = ["abba","baba","bbaa","cd","cd"]
# ["abba","cd"]
print(removeAnagrams(w))