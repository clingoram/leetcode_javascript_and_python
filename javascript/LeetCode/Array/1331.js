/**
 * 1331. Rank Transform of an Array
 * 
 * 依照每個元素在陣列中的排名來回傳，須維持原樣
 * 排序從1開始，若元素一樣則排名一樣
 * 最小的元素 = 1，最大的則為陣列長度
 * 
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  const sortedRank = [...arr].sort((a,b) => a - b);
  let minRank = 1;
  let map = new Map();
  for(let i = 0; i < sortedRank.length;++i) {
    if(!map.has(sortedRank[i])){
      map.set(sortedRank[i],minRank++);
    }
  }
  for(let i = 0;i < arr.length;++i) {
    arr[i] = map.get(arr[i]);
  }
  return arr;
};
// let arr = [40,10,20,30];
// [4,1,2,3]
let arr = [37,12,28,9,100,56,80,5,12];
// [5,3,4,2,8,6,7,1,3]
console.log(arrayRankTransform(arr))