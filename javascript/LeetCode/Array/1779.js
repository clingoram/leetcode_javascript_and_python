/**
 * 1779. Find Nearest Point That Has the Same X or Y Coordinate
 * 
 * x & y = current location
 * A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.
 * 傳回與目前位置曼哈頓距離最小的有效點的索引（從 0 開始索引）。
 * 如果存在多個有效點，則傳回索引最小的有效點。如果沒有有效點，則傳回 -1。
 * 
 * The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).
 * 
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
  let ans = -1;
  let smallest = Infinity;
  for(let i = 0;i < points.length;++i) {
    let prev = Math.abs(x - parseInt(points[i][0]));
    let next = Math.abs(y - parseInt(points[i][1]));
    if(prev * next === 0 && (prev + next) < smallest){
      smallest = prev + next;
      ans = i;
    }
    
  }
  return ans;
};
// let x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]];
// 2
// Of all the points, only [3,1], [2,4] and [4,4] are valid. 
// Of the valid points, [2,4] and [4,4] have the smallest Manhattan distance from your current location, with a distance of 1. 
// [2,4] has the smallest index, so return 2.

// let x = 3, y = 4, points = [[3,4]];
// 0
// let x = 3, y = 4, points = [[2,3]];
// -1

let x = 5, y = 1, points = [[1,1],[6,2],[1,5],[3,1]];
// 3
console.log(nearestValidPoint(x,y,points));