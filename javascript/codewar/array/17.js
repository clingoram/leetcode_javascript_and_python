/**
 * 3kyu - How many are smaller than me II?
 * 
 * 回傳arr[i]的右邊有幾個是小於自己的
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function smaller(arr) {
  // 這方法ok，但不適用於large test cases
  // let ans = [];
  // for(let i = 0;i < arr.length;++i) {
  //   let count = 0;
  //   for(let j = 0;j < arr.length;j++) {
  //     // if(arr[i] === arr[j]){
  //     //   continue;
  //     // }
  //     if(arr[i] > arr[j]){
  //       count++;
  //     }
  //    }
  //    ans[i] = count;
  // }
  // return ans;

  return arr.map((current, i) => {
    let count = 0;
    // 比較當前元素右邊所有的元素
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] < current) {
            count++;
        }
    }
    return count;
  });

  // binary search
  // const result = new Array(arr.length).fill(0);
  //   const sortedArray = [];

  //   // 從右往左處理每個元素
  //   for (let i = arr.length - 1; i >= 0; i--) {
  //       const current = arr[i];
      
  //       // binary search
  //       let left = 0;
  //       let right = sortedArray.length;

  //       while (left < right) {
  //           const mid = Math.floor((left + right) / 2);
  //           if (sortedArray[mid] < current) {
  //               left = mid + 1;
  //           } else {
  //               right = mid;
  //           }
  //       }
  //       result[i] = left;

  //       sortedArray.splice(left, 0, current);
  //   }
  //   return result;
}
console.log(assert.deepEqual(smaller([5, 4, 7, 9, 2, 4, 1, 4, 5, 6]), [5, 2, 6, 6, 1, 1, 0, 0, 0, 0]));
console.log(assert.deepEqual(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]))