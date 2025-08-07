/**
 * 3477. Fruits Into Baskets II
 * 
 * 參數為兩個數值陣列，fruits,baskets。
 * fruits表示每種水果的數量;baskets表示籃子最多可裝幾個
 * 
 * 從左到右須遵守：
 * 每種水果要放在>=它的位置上
 * 每個籃子最多只能裝一種水果
 * 若水果無法裝進任何籃子，unplaced
 * 
 * 回傳有幾個unplaced
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
  // 要找出有幾樣水果無法放進籃子內
  // 能放進去的規則：籃子的容量必須要 >= 水果
  let unplaced = 0;
  for(let i = 0;i < fruits.length;i++) {
    let placed = false;
    for(let j = 0;j < baskets.length;j++) {
      if(fruits[i] <= baskets[j]){
        baskets[j]= -1; // 標記籃子有使用
        placed = true;
        break;
      }
    }
    if(!placed){
      unplaced++;
    }
  }
  return unplaced;
};
// let fruits = [4,2,5], baskets = [3,5,4];
/**
 * 1
 * fruits[0] = 4 is placed in baskets[1] = 5.
 * fruits[1] = 2 is placed in baskets[0] = 3.
 * fruits[2] = 5 cannot be placed in baskets[2] = 4.
 * Since one fruit type remains unplaced, we return 1.
 */
let fruits = [1,4], baskets = [8,1];
// 1
console.log(numOfUnplacedFruits(fruits,baskets));