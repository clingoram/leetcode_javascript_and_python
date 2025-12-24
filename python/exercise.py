'''
取字串中的某個字，變數[數字]，0是從左邊第一個字母開始，-1則是從右邊(後面)開始，依序往上加，例如-2等於右邊倒數第2個字母
EG. 
word = 'apple'
print(word[0]) => a

取得字串中的某部分文字
word[start:end] => ap
也可以寫成這樣(省略start的0或結尾的index)
word[:end] => ap

word[:end] + word[start:] =>apple
'''
word = 'String'
print(word[2:] + word[3:]) #ringing; 2=ring ;3=ing
print('A' + word[3:]) # 把A加上從word開始算起第3個字母 => Aing

song = 'Beautiful Mistakes'
print(len(song)) # 長度


'''
list 相當於PHP中的array，除了能指定只輸出某元素外(array[0])
他也能被slice，但這個slice會另外組成一個新List，所以不會影響到原有的list

list是mutable，可改變它的內容；
string是immutable，不能被改變，除非建立一個新的物件，他有點像是hash內的key
'''
egList = [2,6,3,14]
print(sorted(egList)) # 排序 asc
print(sorted(egList,reverse=True)) # 排序 desc

another = [8,6,45]
print(egList+another) # 把兩個list組合在一起

# 改變list內容
cube = [8,5,3,21]
pow = pow(2,3) # 2的3次方
cube[2] = pow # 把cube的第2個位置element換成pow的值
cube.append(99) # 在cube最後面加上99
print(cube)
print(cube[:4])
cube[1:3] = [54,59,1] # 把cube的1-3位置換成list[54,59,1]
print(cube)
cube[0:len(cube)] = [] # 也能直接寫成cube[:]，全部清空
print(cube) # 清空，因為不知道cube總長度，所以直接用len來代替，不需要直接輸入數字

# 二維陣列
fruit = ['apple','orange']
color = ['red','blue','green']
combine = [fruit,color]
print(combine)
print(combine[0]) # 取出第一個陣列

# tuple:裡面的值無法被更改，頂多只能指定print某個index值
coordinates = (2,3)
print(coordinates[1])

# 費氏數列
def fib(a,b):
    while a < 10:
        print(a)
        a,b = b,a+b

a = 0
b = 1
fib(a,b)

# 條件式
def conditional(x):
  string = ''
  # 條件式，用if else，Python似乎沒有switch..case...用法
  if len(x) <= 5:
    string = 'Small'
  elif len(x) >= 5 and len(x) <= 10:
    string = 'Medium'
  else:
    string = 'Large'

  print(string)

s = 'English Alphabets has 26 letters.'
conditional(s)

# for loop
def loop(n):
  # for loop
  for w in n:
    # 印出list的key和該元素的長度
    print(w,len(w))


word = ['cat','fish','elephant','lion']
loop(word)

astr = str(6) # 宣告變數為字串6
a = int(5) #宣告變數為數值5
print(type(str))

# 類似Java scanner，可以跟使用者互動
day = input("What day is today?")
print("Today is " + day)

# 轉型別:
# float()
# bool()
# str()
# int()
first = input("First: ")
second = input("Second: ")
sum = int(first) + int(second)
print(sum)

year = input("Which year?") # data type return as string 
minus = 2022 - int(year)
print(minus)


# String
fruit = "Apple a day"
print(fruit.replace("p","m"))

# // mean Floor division(向下取整數)
print(7 // 3)

x = 2
y = 5
print(x ** y) # same as 2*2*2*2*2 => 2的5次方 = pow(2, 5)

weight = int(input("Weight: "))
unit = input("Kg or Lbs: ")
converted = ""
if unit.upper() == 'K':
  converted = weight / 0.45
elif unit.upper() == 'L':
  converted = weight * 0.45
else:
  converted = "Please type K or L."
print(str(converted))

# 階梯
i = 1
while i <=5:
  print(i * "*")
  i+=1

# List
names = ["Amy","Bob","Kevin","Davis"]
add = "Jessi"
numbers = [1,6,3,8,3]
print(names[-2]) # 最後面
names.append(add) # array push
print(names)

for i in names:
  print(i)

i = 0
while i < len(names):
  print(names[i])
  i+=1

# List
# 兩種方式印出陣列
from unicodedata import name

# print(names[1:])
names.extend(numbers) # array merge or array push
names.extend("Alen") # 後面放字串的話，會把該字串拆開 "apple" => 'a','p','p','l','e'
names.insert(1,"Jo") # 把位置1的名子改成Jo
names.index("Bob") # find the name
numbers.count(3)
print(names)
print(numbers)

tt = [1,2,3,4,5,6,7]
pt = tt*3 # 陣列重複: array * 重複次數
print(pt)

# array[start index:end index - 1]
# print(tt[2:4])
# 加上list => 這個陣列總共有幾個
# print(list(tt[2:4]))
# 刪除元素[index start:end index - 1]
del tt[1:3]
print(list[tt])

'''
在list中加入元素:
A.append(E)：在A串列最後面加入E元素
A.extend(B)：在A串列中加入B串列的元素
A.insert(B)：在A串列中參數1的位置上加入B串列

移除串列的元素:
pop()：取出串列中最後一個元素，並且移除元素
A.remove(E)：移除A串列中第一個出現E元素

reverse()：反轉串列的順序
sort()：將串列做排序
'''
# color = ["red","green","blue"]
# color.append("orange")
# color.extend(["purple","pink"])
# color.insert(2,"grey")
# color.pop()
# color.remove("blue")
# color.reverse()
# print(color,sep = '\n')

from math import gcd



def gcdOfStrings(self, str1, str2):
  """
  :type str1: str
  :type str2: str
  :rtype: str
  """
  # str1 length % str2 length = res
  # EG.str1 = "ABCABC", str2 = "ABC" => 6 % 3 => 2(擷取str1最前面2個字)
  # if ( str1 + str2 ) != ( str2 + str1 ):
  #   print("")
  # elif str1 == str2:
  #   print(str1)
  # else:
  #   length_by_gcd = gcd(len(str1), len(str2))

  #   print(str1[:length_by_gcd])

# str1 = "LEET"
# str2 = "CODE"
# gcdOfStrings(str1,str2)

def checkExist(arr:list,item:int):
  return True if item in arr else False

array = [1,2,3,4]
item = 3
checkExist(array,item)


r = lambda a: "True" if a > 5 else "False"
print(r(1))