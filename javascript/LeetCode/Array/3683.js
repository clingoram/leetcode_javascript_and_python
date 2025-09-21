/**
 * 3683. Earliest Time to Finish One Task
 * 
 * task = [start time,finsh time]
 * 回傳task最早完成的時間
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
  let ans = Infinity;
  for(let i = 0;i < tasks.length;i++) {
    ans = Math.min(ans,tasks[i][0] + tasks[i][1]);
  }
  return ans;
};
let tasks = [[1,6],[2,3]];
// 5
// The first task starts at time t = 1 and finishes at time 1 + 6 = 7. The second task finishes at time 2 + 3 = 5. You can finish one task at time 5.
console.log(earliestTime(tasks));