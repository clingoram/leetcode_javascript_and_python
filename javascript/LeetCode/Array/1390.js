/**
 * 1390. Four Divisors
 * 
 * 參數為數值陣列，找出元素能夠被整除4次的為何？並將能整除該元素的數字加總回傳
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
  // 能整除元素的除了最小的1之外，還有它自己，所以固定整除的有2個

  // solution 1.此方法可用，但若用在大資料，會tle
  // let ans = 0;
  // for(let i = 0;i < nums.length;++i) {
  //   let arr = divisors(nums[i]);
  //   if(arr.length === 4){
  //     ans += arr.reduce((a,b) => a + b,0);
  //   }
  // }
  // return ans;
  // /**
  //  * 每個元素能被整除的數字有哪些
  //  * @param {number} e 
  //  * @returns {number[]}
  //  */
  // function divisors(e){
  //   let divisor = [];
  //   for(let i = 1;i <= e;++i) {
  //     if(e % i === 0){
  //       divisor.push(i);
  //     }
  //   }
  //   return divisor;
  // }

  // solution 2.
  let ans = 0;
  for(const a of nums){
    let divisorsCount = 0;
    let sum = 0;
    for(let i = 1;i * i <= a;++i) {
      if(a % i === 0){
        divisorsCount++;
        sum += i;
        if (i * i !== a) {
          divisorsCount++;
          sum += a / i;
        }
      }
    }
    if(divisorsCount === 4){
      ans += sum;
    }
  }
  return ans;
};
let nums = [21,4,7];
/***
 * ans: 32
 * 
 * 21 has 4 divisors: 1, 3, 7, 21
 * 4 has 3 divisors: 1, 2, 4
 * 7 has 2 divisors: 1, 7
 * The answer is the sum of divisors of 21 only.
 */
// let nums = [21,21];
// 64 (32 + 32)
console.log(sumFourDivisors(nums));