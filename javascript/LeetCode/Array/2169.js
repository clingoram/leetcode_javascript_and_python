/**
 * 2169. Count Operations to Obtain Zero
 * 
 * 一次操作中，若nums1 > nums2，則nums1 = nums1 - nums2
 * nums1 < nums2， nums2 = nums1 - nums2
 * 計算要幾次才能使得nums1 = 0 or num2 = 0
 * 
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
  // solution 1.
  // let ans = 0;
  // while(num1 !== 0 && num2 !== 0){
  //     ans += Math.floor(num1 / num2);
  //     num1 %= num2;
  //     [num1,num2] = [num2,num1];
  // }
  // return ans;

  // solution 2.
  let ans = 0;
  while(num1 !== 0 && num2 !== 0){
      ans += Math.floor(num1 / num2);
      num1 %= num2;
      // swap nums1 and nums2
      let temp = num1;
      num1 = num2;
      num2 = temp;
  }
  return ans;
};
let num1 = 2, num2 = 3;
// Output: 3
// Explanation: 
// - Operation 1: num1 = 2, num2 = 3. Since num1 < num2, we subtract num1 from num2 and get num1 = 2, num2 = 3 - 2 = 1.
// - Operation 2: num1 = 2, num2 = 1. Since num1 > num2, we subtract num2 from num1.
// - Operation 3: num1 = 1, num2 = 1. Since num1 == num2, we subtract num2 from num1.
// Now num1 = 0 and num2 = 1. Since num1 == 0, we do not need to perform any further operations.
// So the total number of operations required is 3.
console.log(countOperations(num1,num2))