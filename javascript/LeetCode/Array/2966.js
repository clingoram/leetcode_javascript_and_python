/**
 * 2966. Divide Array Into Arrays With Max Difference
 * 
 * 參數為一個數值陣列nums和一個正數k，陣列長度為n是可以被3整除的。
 * 將nums.length / 3，拆成各自長度相等的小陣列，但是小陣列內任2個元素必須加總或相減後必須<=k
 * 以2維陣列回傳，若沒有則回傳空陣列
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
  // 一個陣列內任2個元素必須相等或小於k，表示該2元素可相加或相減
  // solution 1
//   let result = [];
//   // sort the array
//   nums.sort((a,b) => a - b);
//   for(let i = 0;i < nums.length;i+=3) {
//     // 拆成每個陣列長度為3的2維陣列
//     result.push(nums.slice(i,i+3));
//   }
//   for(let i = 0;i < result.length;i++) {
//     // sum up 2 elements or subtract 2 elements to check the result is <= k.
//     let max = Math.max(...result[i]);
//     let min = Math.min(...result[i]);
//     if(max - min > k){
//       return [];
//     }
//   }
//   return result;

  // solution 2.
  // let result = [];
  // nums.sort((a,b) => a - b);
  // let i = 0;
  // while(i < nums.length){
  //   // 將nums拆成指定長度的小陣列，並塞進result內
  //   result.push(nums.slice(i,i+3));
  //   i+=3;
  // }
  // for(let j = 0;j < result.length;j++) {
  //   let max = Math.max(...result[j]);
  //   let min = Math.min(...result[j]);
  //   if((max - min) > k){
  //     return [];   
  //   }
  // }
  // return result;

    // solution 3.
    let result = [];
    nums.sort((a,b) => a - b);
    for(let i = 0;i < nums.length;i += 3){
      if((nums[i+2] - nums[i]) > k){
        return [];
      }
      result.push([nums[i], nums[i + 1], nums[i + 2]]);
    }
    return result;
};
let nums = [2,4,2,2,5,2], k = 2;
// 2