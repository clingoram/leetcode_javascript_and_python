/**
 * Greatest common divisor
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {number}
 */
function mygcd(x,y){
  // 求x & y 的最大公約數
  // x & y 可能是很大的數
  if (y === 0) {
    return x;
  }
  return mygcd(y, x % y);

  // 下述方法也可以解出，但若參數比較大，會執行很久
  // let smaller = Math.min(x, y);
  // let hcf = 1;

  // for (let i = 1; i <= smaller; i++) {
  //   if (x % i === 0 && y % i === 0) {
  //     hcf = i;
  //   }
  // }
  // return hcf;
}
console.log(assert.strictEqual(mygcd(30,12),6))
console.log(assert.strictEqual(mygcd(36, 12),12))
console.log(assert.strictEqual(mygcd(8,9),1))
console.log(assert.strictEqual(mygcd(1,1),1))