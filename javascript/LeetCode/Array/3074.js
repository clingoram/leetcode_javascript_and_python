/**
 * 3074. Apple Redistribution into Boxes
 * 
 * 最少需要幾個箱子才能將重新分配的apple裝進去
 * 
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    // sort box desc
    capacity.sort((a,b) => b - a);
    let sum = apple.reduce((a,b) => a + b,0);
    let ans = 0;
    while(sum > 0){
      sum -= capacity[ans++];
    }
    return ans;

};
let apple = [5,5,5], capacity = [2,4,2,7];
// 4
console.log(minimumBoxes(apple,capacity))