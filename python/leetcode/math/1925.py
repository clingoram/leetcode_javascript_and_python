from math import sqrt
class So:
  '''
  So 的 Docstring
 
  '''
  def countTriples(self, n: int) -> int:
    '''
    1925. Count Square Sum Triples

    triple = a 二次方 + b 二次方 = c 二次方

    :param self: 說明
    :param n: 數值n
    :type n: int
    :return: 說明
    :rtype: int
    '''
    ans = 0
    for a in range(1,n + 1):
      for b in range(1,n + 1):
        pairs = int(sqrt(a**2 + b**2 + 1))
        if pairs <= n and pairs **2 == a**2 + b**2:
          ans += 1
    return ans

ans = So()
n = 5
# 2
print(ans.countTriples(n))