def convertToTitle(columnNumber: int) -> str:
  '''
  168. Excel Sheet Column Title

  :param columnNumber: 給定一個整數 columnNumber，傳回其在 Excel 表格中對應的列標題。
  :type columnNumber: int
  :return: 回傳對應的列
  :rtype: str
  '''
  ans = ""
  # ASCII 
  # ord('alphabet') => number
  # chr(number) => alphabet
  baseChar = ord('A')
  while(columnNumber > 0):
    offset = (columnNumber - 1) % 26
    # print(offset)
    ans = str(chr(baseChar + offset)) + ans

    columnNumber = int((int(columnNumber - 1) / 26))
  return ans
columnNumber = 701
# ZY
print(convertToTitle(columnNumber))