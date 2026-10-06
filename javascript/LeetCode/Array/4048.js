/**
 * 4048. Count Values With Equally Spaced Occurrences I
 * 
 * special: x在nums中出現3次，這三次的index必須要隔一數字(i < j < k)，回傳有幾個不重複(unique)元素符合
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialIntegers = function(nums) {
    // 在陣列中出現3次且indx必須隔一數字(i < j < k)
    let ans = 0;
    let map = new Map();
    // {nums[i] => [index 1,index 2,index 3], nums[i2] => [index x, index x2]}
    for(let i = 0;i < nums.length;++i){
      if (!map.has(nums[i])) {
        map.set(nums[i], []);
      }
      map.get(nums[i]).push(i);
    }
    // console.log(map)
    for(const i of map.values()){
      if(i.length === 3){
        if(i[0] + i[2] === 2 * i[1]){
          ans++;
        }
      }
    }
    return ans;
};
let nums = [1,8,1,5,1,5,8,5];
/**
 * 2
 * 
 * 1 is special because it occurs exactly three times at equally spaced indices 0, 2, and 4.
 * 5 is special because it occurs exactly three times at equally spaced indices 3, 5, and 7.
 * 8 is not special because it occurs only twice.
 * Therefore, the answer is 2.
*/
// let nums = [8,6,6,8,8];
// 0
console.log(countSpecialIntegers(nums))