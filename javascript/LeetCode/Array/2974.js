/**
 * 2974. Minimum Number Game
 * 
 * nums.length = even(偶數)，每一輪選手(Alice and Bob )皆須：
 * 第一步，Alice先從陣列中移除最小的元素一次，之後換Bob做同樣的事情(移除第一小＆第二小的元素)
 * 第二步，Bob將移除的元素加進空陣列arr中，再換Alice做同樣的事情(添加第二小元素＆第一小元素)
 * 重複上述步驟直到nums變成空陣列為止，回傳最終的arr
 * 
 * @param {number[]} nums
 * @return {number[]} arr
 */
var numberGame = function(nums) {
  let arr = [];
  nums.sort((a,b) => a - b);
  // 兩個兩個比較並交換
  for(let i = 0;i < nums.length;i+=2) {
    // 有可能有同樣的元素，所以得<=
    if(nums[i] <= nums[i+1]){
      let temp = nums[i];
      arr[i] = nums[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;

  // solution 2.
  // nums.sort((a,b) => a - b);
  // // 兩個兩個比較並交換
  // for(let i = 0;i < nums.length;i+=2) {
  //   [nums[i],nums[i+1]] = [nums[i+1],nums[i]]
  // }
  // return nums;
};
let nums = [5,4,2,3];
// Output: [3,2,5,4]
// Explanation: In round one, first Alice removes 2 and then Bob removes 3. Then in arr firstly Bob appends 3 and then Alice appends 2. So arr = [3,2].
// At the begining of round two, nums = [5,4]. Now, first Alice removes 4 and then Bob removes 5. Then both append in arr which becomes [3,2,5,4].
console.log(numberGame(nums));