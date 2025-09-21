'''
  455. Assign Cookies
  Difficulty:Easy1
  
  Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.
  Each child i has a greed factor g[i], which is the minimum size of a cookie that 
  the child will be content with; and each cookie j has a size s[j]. 
  
  If s[j] >= g[i], we can assign the cookie j to the child i, 
  and the child i will be content. 
  Your goal is to maximize the number of your content children and output the maximum number.
  
  Example 1:
  Input: g = [1,2,3], s = [1,1]
  Output: 1
  Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
  And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
  You need to output 1.
  
  Example 2:
  Input: g = [1,2], s = [1,2,3]
  Output: 2
  Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
  You have 3 cookies and their sizes are big enough to gratify all of the children, 
  You need to output 2.
   
   
  Constraints:
  1 <= g.length <= 3  104
  0 <= s.length <= 3  104
  1 <= g[i], s[j] <= 231 - 1
'''
class Solution:
  def findContentChildren(self, g: list[int], s: list[int]) -> int:
    """
    給定兩個陣列,一個表示各餅乾的分量(s),一個表示各孩童的食量(g)
	  一個孩童最多只能拿一個餅乾,算出這些餅乾最多能餵飽幾個孩童
    """
    if len(s) == 0:
      return 0
    s.sort()
    g.sort()

    max_number = 0
    cookie_index = len(s) - 1
    child_number = len(g) - 1
    while cookie_index >= 0 and child_number >= 0:
      if s[cookie_index] >= g[child_number]:
        max_number+=1
        cookie_index-=1
        child_number-=1
      else:
        child_number-=1
    return max_number
  
child = [1,2,3]
cookie = [1,1]
ans = Solution()

print(ans.findContentChildren(child,cookie))