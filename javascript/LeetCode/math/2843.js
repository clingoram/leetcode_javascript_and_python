/**
 * 2843. Count Symmetric Integers
 * 
 * You are given two positive integers low and high.
 * 
 * An integer x consisting of 2 * n digits is symmetric if the sum of the first n digits of x is equal to the sum of the last n digits of x. 
 * Numbers with an odd number of digits are never symmetric.
 * 
 * Return the number of symmetric integers in the range [low, high].
 * 
 * Hints:
 * 1.Iterate over all numbers from low to high
 * 2.Convert each number to a string and compare the sum of the first half with that of the second.
 * 
 * Example 1:
 * Input: low = 1, high = 100
 * Output: 9
 * Explanation: There are 9 symmetric integers between 1 and 100: 11, 22, 33, 44, 55, 66, 77, 88, and 99.
 * 
 * Example 2:
 * Input: low = 1200, high = 1230
 * Output: 4
 * Explanation: There are 4 symmetric integers between 1200 and 1230: 1203, 1212, 1221, and 1230.
 *  
 * 
 * Constraints:
 * 1 <= low <= high <= 104
 * 
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
  // count how many numbers between low and high (inclusive) are symmetric according to a specific rule.
  // Symmetric不會是奇數且前半部總和 = 後半部總和
  // 1212 is symmetric → 1+2 = 3 and 1+2 = 3 ✅
  // 123321 → 1+2+3 = 6 and 3+2+1 = 6 ✅
  // 123456 → 1+2+3 = 6 and 4+5+6 = 15 ❌ not symmetric
  let count = 0;

  for(let i = low;i <= high;i++) {
    // 將數字拆成前後兩部份 => 數字長度必須是偶數
    let str = i.toString();
    if(str.length % 2 !== 0){
      continue;
    }
    let half = str.length / 2;

    let firstHalfSum = 0;
    let secondHalfSum = 0;
    // 前半部加總
    for(let f = 0;f < half;f++) {
      firstHalfSum += parseInt(str[f]); 
    }
    // 後半部加總
    for(let s = half; s < str.length;s++) {
      secondHalfSum += parseInt(str[s]);
    }
    // firstHalf加總 === secondHalf的加總 => count++
    if(firstHalfSum === secondHalfSum){
      count++;
    }
  }
  return count;
};
let low = 1200, high = 1230;
// 4
console.log(countSymmetricIntegers(low,high));