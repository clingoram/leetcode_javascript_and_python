/**
 * 3663. Find The Least Frequent Digit
 * 
 * 參數為一整數n，找出在其十進位表示中出現頻率最低的數字。如果多個數字的出現頻率相同，則選擇最小的元素。
 * 數字x的出現頻率是指它在n的十進位表示法中的出現次數
 * 
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function(n) {
    /**
     * 依據每個數字出現的次數找出出現次數最少的元素，若有好幾個數字出現次數相同，回傳最小的那個元素。
     * 
     * solution 1. Hash table
     */

    // solution 1.
    // Hash table
    let nSplitToStr = n.toString().split("");
    let map = new Map();
    let minFreq = Infinity,result = 10;
    for(let i = 0;i < nSplitToStr.length;++i) {
      map.has(nSplitToStr[i]) ? map.set(nSplitToStr[i],map.get(nSplitToStr[i]) + 1) : map.set(nSplitToStr[i],1);
    }
    // 不斷比較minFreq和value哪個最小，因此minFreq值會一直更新
    for(const [key,value] of map){
      minFreq = Math.min(minFreq,value);
    }
    for(const [key,value] of map){
      // 最小的value = minFreq
      if(value === minFreq){
          // 比較result和key哪個最小，key = 元素
          result = Math.min(result,key);
      }
    }
    return reuslt;

};
let n = 723344511;
/*
Output: 2
Explanation:
The least frequent digits in n are 7, 2, and 5; each appears only once.
*/
console.log(getLeastFrequentDigit(n));