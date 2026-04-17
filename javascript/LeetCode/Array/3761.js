/**
 * 3761. Minimum Absolute Distance Between Mirror Pairs
 * 
 * mirror pair = indices(i,j)
 * reverse(nums[i] === nums[j]) 若數字前面為0，則省略0
 * 回傳最小mirror pair絕對距離 abs(i - j)，若無，回傳-1
 * 
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
  /**
   * 陣列元素兩個為一組(i,j)，每個元素反轉後跟下一個元素比較是否一致。若一致 abs(index i - index j)，取最小結果
   */
  // 反轉數字
  function reverseNum(x){
    let y = 0;
    while(x > 0){
      y = y * 10 + (x % 10);
      x = Math.floor(x / 10);
    }
    return y;
  }

  let map = new Map();
  let ans = nums.length + 1;
  for(let i = 0;i < nums.length;i++){
    if(map.has(nums[i])){
      ans = Math.min(ans,i - map.get(nums[i]));
    }
    map.set(reverseNum(nums[i]),i);
  }
  return ans === nums.length + 1 ? -1 : ans;
};
let nums = [12,21,45,33,54]
/*
Output: 1
Explanation:
The mirror pairs are:
(0, 1) since reverse(nums[0]) = reverse(12) = 21 = nums[1], giving an absolute distance abs(0 - 1) = 1.
(2, 4) since reverse(nums[2]) = reverse(45) = 54 = nums[4], giving an absolute distance abs(2 - 4) = 2.
The minimum absolute distance among all pairs is 1.
*/
console.log(minMirrorPairDistance(nums));