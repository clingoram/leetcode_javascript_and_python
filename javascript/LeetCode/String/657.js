/**
 * 657. Robot Return to Origin
 * 
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  /**
   * moves只會有'R' (right), 'L' (left), 'U' (up)和'D' (down)這幾個英文字母
   * 回傳布林看moves後是否會回到原點(0, 0)
   * 
   * x(0),y(0)
   * u = d
   * r = l
   * 
   * 計算每個字母出現次數，r的出現次數 = l的出現次數; u 的出現次數 = d的出現次數
  */
  // solution 1.
  // TC:O(N)
  // let direactionsCount = new Map();
  // for(let i = 0;i < moves.length;++i) {
  //   direactionsCount.has(moves[i]) ? direactionsCount.set(moves[i],direactionsCount.get(moves[i])+1) : direactionsCount.set(moves[i],1);
  // }
  // // 取得Map.get(key)對應value
  // if(direactionsCount.get("U") === direactionsCount.get("D") && direactionsCount.get("R") === direactionsCount.get("L")){
  //   return true;
  // }
  // return false;

  // another solution
  // TC:O(N)
  let direactionsObj = {};
  for(let i = 0;i < moves.length;++i) {
    if(Object.hasOwn(direactionsObj, moves[i])){
      direactionsObj[moves[i]] +=1;
    }else{
      direactionsObj[moves[i]] = 1;
    }
  }
  // console.log(direactionsObj.L)
  return direactionsObj.L === direactionsObj.R && direactionsObj.U === direactionsObj.D;

  // solution 2.
  // TC: O(N)
  // 計算x和y各自出現次數
  // x = 水平(左l右r); y = 垂直(上u下d)
  // 水平(x):
  // L:x--; R:x++;
  // 垂直(y):
  // U:y++ ; D: y--
  // let x = 0,y = 0;
  // for(let i = 0;i < moves.length;++i) {
  //   if(moves[i] === 'R'){
  //     x++;
  //   }else if(moves[i] === 'U'){
  //     y++;
  //   }else if(moves[i] === 'L'){
  //     x--
  //   }else if(moves[i] === 'D'){
  //     y--;
  //   }
  // }
  // return x === 0 && y === 0;

};
// let moves = "UD";
/*
Output: true
Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
*/
let moves = "LL";
/*
Output: false
Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.
*/
console.log(judgeCircle(moves));
