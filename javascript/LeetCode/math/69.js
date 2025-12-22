/**
 * 69. Sqrt(x)
 * 
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // 不能使用內建的pow() or sqrt()
    // rounded down to the nearest integer.
  if (x < 0) {
    return;
  }
  return Math.floor(x ** 0.5); 
};
let x = 8;
// 2
console.log(mySqrt(x));