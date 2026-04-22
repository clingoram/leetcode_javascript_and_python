/**
 * 1725. Number Of Rectangles That Can Form The Largest Square
 * 
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    /**
     * 2維陣列，每個陣列元素分別代表該陣列三角形的長l、寬w
     * each rectangle are of lengths [5,3,5,5] is min of [l,w] 
     * 回傳有幾個maxLen可組成三角形
    */
   // solution 1
  //  let rectangleLen = [];
  //  let countMaxLen = 0;
  //  for(const eachLen of rectangles){
  //     rectangleLen.push(parseInt(Math.min(...eachLen)));
  //  }
  // let maxLen = Math.max(...rectangleLen);
  // for(let i = 0;i < rectangleLen.length;++i) {
  //   if(rectangleLen[i] === maxLen){
  //     countMaxLen++;
  //   }
  // }
  // return countMaxLen;

  // solution 2.
  // time:O(N)
  let count = 0, maxLen = 0;
  for(const eachLen of rectangles) {
    let side = Math.min(...eachLen);

    if(side > maxLen){
      count = 1;
      maxLen = side;
    }else if(side === maxLen){
      count++;
    }
  }
  return count;
};
let rectangles = [[5,8],[3,9],[5,12],[16,5]]
// Output: 3
// Explanation: The largest squares you can get from each rectangle are of lengths [5,3,5,5].
// The largest possible square is of length 5, and you can get it out of 3 rectangles.
console.log(countGoodRectangles(rectangles));