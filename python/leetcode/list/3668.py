from typing import List

def recoverOrder(order: List[int], friends: List[int]) -> List[int]:
    '''
    3668. Restore Finishing Order

    兩個數值陣列參數分別是order、friends
    order內的元素表示friends的id完賽順序，friends則是他們各自的id，依照order順序，回傳friends完賽的有誰。
    '''
    ans = []
    for i in range(len(order)):
        if order[i] in friends:
            ans.append(order[i])
    return ans

    # solition 2.
    # ans = set(friends)
    #     return [i for i in order if i in ans]
order = [3,1,2,5,4]
friends = [1,3,4]
# [3,1,4]
print(recoverOrder(order,friends))