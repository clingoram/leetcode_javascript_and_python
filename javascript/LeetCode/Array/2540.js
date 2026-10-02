/**
 * 2540. Minimum Common Value
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
  /**
   * 找出兩個陣列中最小的共通元素，找不到則-1
   * 
   * 2個陣列長度不一定一樣
   */
  // Solution 1.
  // Set
  // let set = new Set();
  // for(const a of nums1){
  //   set.add(a);
  // }
  // for(const b of nums2){
  //   if(set.has(b)){
  //     return b;
  //   }
  // }
  // return -1;


  // Solution 2.
  // 2 pointers
  let i = 0, j = 0;
  while(i < nums1.length && j < nums2.length){
    if(nums1[i] < nums2[j]){
      i++;
    }else if(nums1[i] > nums2[j]){
      j++;
    }else{
      return nums1[i];
    }
  }
  return -1;
};
let nums1 = [1,2,3], nums2 = [2,4];
// 2
console.log(getCommon(nums1,nums2));