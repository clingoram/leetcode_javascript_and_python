/**
 * 3099. Harshad Number
 * 
 * Harshad:能被其各位數字之和整除
 * 如果 x 是Harshad，則傳回 x 各位數字總和；否則，回傳 -1。
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    // let split = x.toString().split("");
    // let sum = 0;
    // for(let i = 0;i < split.length;i++) {
    //   sum+=parseInt(split[i]);
    // }
    // if(x % sum === 0){
    //   return sum;
    // }
    // return -1;

    // solution 2.
    let ans = 0;
    let temp = x;
    while(temp > 0){
      // 取尾數
      ans += temp % 10;
      temp = Math.floor(temp / 10);
    }
    return x % ans === 0 ? ans : -1;
};
let x = 18;
// 9
console.log(sumOfTheDigitsOfHarshadNumber(x));