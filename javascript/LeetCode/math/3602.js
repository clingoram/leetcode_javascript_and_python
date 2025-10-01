/**
 * 3602. Hexadecimal and Hexatrigesimal Conversion
 * 
 * hexadecimal = base 16，使用數字0 - 9和大寫A - F代表0 - 15
 * hexatrigesimal = base 16，使用數字0 - 9和大寫A - Z代表0 - 35
 * 取得hexadecimal的n的二次方(n * 2)和hexatrigesimal的n的三次方（n * 3)串連
 * @param {number} n
 * @return {string}
 */
var concatHex36 = function(n) {
  return ((n ** 2).toString(16) + (n ** 3).toString(36)).toUpperCase();
};
let n = 36
/** 
 * Output: "5101000"
n2 = 36 * 36 = 1296. In hexadecimal, it converts to (5 * 162) + (1 * 16) + 0 = 1296, which corresponds to "510".
n3 = 36 * 36 * 36 = 46656. In hexatrigesimal, it converts to (1 * 363) + (0 * 362) + (0 * 36) + 0 = 46656, which corresponds to "1000".
Concatenating both results gives "510" + "1000" = "5101000".
 * 
*/
console.log(concatHex36(n));