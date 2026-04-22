/** 
 * 2515. Shortest Distance to Target String in a Circular Array
 * 
 * 陣列是一個圓，意味著陣列頭元素可以取得陣列尾元素
 * 從左邊或右邊開始都能通
 * 
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    /**
     * 若陣列中沒有元素符合target，回傳-1
     * 往左或往右找
     * 回傳最短能到words[target]的距離
     */
    for(let i = 0;i < words.length;++i) {
      let right = (startIndex + i) % words.length;
      let left = (startIndex - i + words.length) % words.length;

      if(words[left] === target || words[right] === target){
        return i;
      }
    }
    return -1;
};
let word = ["hello","i","am","leetcode","hello"], target = "hello", startIndex = 1
/*
Output: 1
Explanation: We start from index 1 and can reach "hello" by
- moving 3 units to the right to reach index 4.
- moving 2 units to the left to reach index 4.
- moving 4 units to the right to reach index 0.
- moving 1 unit to the left to reach index 0.
The shortest distance to reach "hello" is 1.
*/
console.log(closestTarget(word,target,startIndex));