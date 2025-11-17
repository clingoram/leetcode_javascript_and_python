/**
 * 3289. The Two Sneaky Numbers of Digitville
 * 
 * 參數為數值陣列，回傳元素出現次數大於2的元素。回傳的陣列每個必須是唯一值
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    // element出現次數 >= 2才能被保留
    // 回傳的陣列元素必須是唯一值
    // let map = new Map();
    // let ans = [];
    // for(let i = 0;i < nums.length;++i) {
    //   map.has(nums[i]) ? map.set(nums[i],map.get(nums[i])+ 1) : map.set(nums[i],1);
    // }
    // for(const [key,value] of map) {
    //   if(value >= 2){
    //     ans.push(key);
    //   }
    // }
    // return ans;

    // solution 2.
    let set = new Set();
    let result = [];
    for(let i = 0;i < nums.length;i++) {
      if(set.has(nums[i])){
        result.push(nums[i]);
      }else{
        set.add(nums[i]);
      }
    }
    return result;
};
let nums = [0,1,1,0];
// [0,1]
console.log(getSneakyNumbers(nums));