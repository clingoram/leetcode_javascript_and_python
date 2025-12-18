/**
 * 3573. Best Time to Buy and Sell Stock V
 * 
 * 正常交易：i天買，j天賣(i < j)，利潤：proces[j] - prices[i]
 * 炒短線：i天賣，j天買回來(i < j)，利潤：prices[i] - prices[j]
 * 不能同一天買賣單張股票
 * 回傳在交易k次後最多能賺多少
 * 
 * @param {number[]} prices 第i天的股價
 * @param {number} k 最多只能交易k次
 * @return {number}
 */
var maximumProfit = function(prices, k) {
    const firstPrice = prices[0];
    const dp = Array(k + 1).fill(null).map(() => ({
        maxProfit: 0,
        buyHold: -firstPrice,
        sellHold: firstPrice
    }));
    for(let i = 0;i < prices.length;++i) {
      const current = prices[i];
      for(let j = k;j > 0;--j) {
          const prevProfit = dp[j - 1].maxProfit;
          dp[j].maxProfit = Math.max(dp[j].maxProfit, dp[j].buyHold + current, dp[j].sellHold - current);
          dp[j].buyHold = Math.max(dp[j].buyHold, prevProfit - current);
          dp[j].sellHold = Math.max(dp[j].sellHold, prevProfit + current);
      }
    }
    return dp[k].maxProfit;
};
let prices = [1,7,9,8,2], k = 2;
// 14
// can make $14 of profit through 2 transactions:
// A normal transaction: buy the stock on day 0 for $1 then sell it on day 2 for $9. 
// A short selling transaction: sell the stock on day 3 for $8 then buy back on day 4 for $2.
// 9 - 1 = 8 ; 8 - 2 = 6; 8 + 6 = 14
// console.log(maximumProfit(prices,k))
