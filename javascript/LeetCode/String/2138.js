/**
 * 2138. Divide a String Into Groups of Size k
 * 
 * 參數為一個字串s，數值k和填空用的字元fill。
 * 將字串s拆成指定的k長度，若字串無法達成k長度，則以fill字串填補直到該字串長度 = k
 * 
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
  let groups = Math.ceil(s.length / k);
  let result = new Array(groups)
  for(let i = 0;i < groups;i++) {
    let group = "";
    for (let j = 0; j < k; j++) {
      const index = i * k + j;
      if (index < s.length) {
        group += s[index];
      } else {
        group += fill; // Padding character
      }
    }
    result[i] = group;
  }
  return result;
};
let s = "abcdefghij", k = 3, fill = "x";
// ["abc","def","ghi","jxx"]
console.log(divideString(s,k,fill));