/**
 * 3162. Find the Number of Good Pairs I
 * 
 * good if nums1[i] is divisible by nums2[j] * k (0 <= i <= n - 1, 0 <= j <= m - 1).
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
  // solution 1.
  // let count = 0;
  // for(let i = 0;i < nums1.length;i++) {
  //   for(let j = 0;j < nums2.length;j++) {
  //     if(nums1[i] % (nums2[j] * k) == 0){
  //       count++;
  //     }
  //   }
  // }
  // return count;

  // solution 2.
  let count = 0;
  let map = new Map();
  for(let i of nums2) {
    map.set(i,(map.get(i) || 0 ) + 1);
  }
  for(let i of nums1) {
    // kwy mean j.
    for(const [key,value] of map) {
      if(i % (key * k)=== 0){
        count+= value;
      }
    }
  }
  return count;
};
let nums1 = [1,3,4], nums2 = [1,3,4], k = 1;
// 5
console.log(numberOfPairs(nums1,nums2,k))