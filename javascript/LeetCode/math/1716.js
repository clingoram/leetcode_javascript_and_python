/**
 * 1716. Calculate Money in Leetcode Bank
 * 
 * 給一個數字N，表示會存N天的錢，存錢的起始值為1(星期一)，每隔一天增加1元，直到第7天(星期天)為止
 * 而下一禮拜存錢起始值會比上禮拜一多1元，回傳這N天總共存了多少錢
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    // 禮拜一（第一天）存1元，之後的每一天，會存比前一天還多一元的錢
    // 一個禮拜有7天，每個禮拜一會存得比上禮拜一存的錢多一元
    let sum = 0;
    let start = 1;
    while(n > 0){
      for(let i = start;i < start + 7 && n > 0;++i) {
        sum += i;
        n--;
      }
      start++;
    }
    return sum;
};
// let n = 10;
// 37
// After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2nd Monday, Hercy only puts in $2.
// let n = 4;
// 10
let n = 20;
// 96
console.log(totalMoney(n));