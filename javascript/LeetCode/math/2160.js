/**
 * 2160. Minimum Sum of Four Digit Number After Splitting Digits
 * 
 * 將nums 拆成一組[new1,new2]，這兩個皆是由nums各位數隨意組合而成。回傳new1 + new 2 加總而成的最小結果。
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
  // 最小的2個數字相加 = 十位數：;其次較大的2個數字相加 = 個位數
  // index 奇位數相加 = new2 ;index 偶位數相加 = new1

  // solution 1.
  // let split = num.toString().split("").sort((a,b) => a - b);
  // let new1 = "";
  // let new2 = "";
  // for(let i = 0; i < split.length;i++) {
  //   // 判斷index是偶數還是奇數
  //   if(i % 2 !== 0){
  //     new2 += split[i];
  //   }else{
  //     new1 += split[i];
  //   }
  // }
  // return parseInt(new1) + parseInt(new2);

  // solution 2. (覺得第一個 & 第三個比較好)
  // let split = num.toString().split("").sort((a,b) => a - b);
  // let chunk = [];
  // let new1  = "",new2 = "";
  // for (let i = 0; i < split.length; i++) {
  //   if(i % 2 !== 0){
  //     chunk.push(split[i]);
  //   }else{
  //     chunk.push(split[i]);
  //   }
  // }
  // for(let i = 0;i < chunk.length;i++){
  //   // index是偶數還是奇數
  //   if(i % 2 === 0){
  //     new1 += chunk[i];
  //   }else{
  //     new2 += chunk[i];
  //   }
  // }
  // return parseInt(new1) + parseInt(new2);

  // solution 3.
  let chunk = num.toString().split("").sort((a,b) => a - b);
  // 偶數位index值相加
  let new1 = chunk[0] + chunk[2]; 
  // 奇數位index值相加
  let new2 = chunk[1] + chunk[3];
  return parseInt(new1) + parseInt(new2);
};
// let num = 2932;
// 52
// Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
// The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.
let num = 2687;
// 95 (27 + 68)
console.log(minimumSum(num));