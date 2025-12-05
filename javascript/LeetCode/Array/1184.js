/**
 * 1184. Distance Between Bus Stops
 * 
 * 從圓中(distance)找出從start到destination最短的距離
 * 
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  let res = 0,total = distance.reduce((a,b)=>a + b);
  if(start > destination){
    let temp = start;
    start = destination;
    destination = temp;
  }
  for(let i = 0;i < distance.length;++i) {
    if(i >= start && i < destination){
      res += distance[i]
    }
  }
  return Math.min(res,total - res);
};
//             [0,1,2,3]
// let distance = [1,2,3,4], start = 0, destination = 2;
// ans.3 => 2+1
// 7 => 1+2+4
// Distance between 0 and 2 is 3 or 7, minimum is 3.

let distance = [7,10,1,12,11,14,5,0], start = 7, destination = 2;
// 17
console.log(distanceBetweenBusStops(distance,start,destination));