/**
 * 165. Compare Version Numbers
 * 
 * 參數為兩個字串，其內含有"."，將參數依據"."拆成左右兩部份，從左到右比較每個部份大小。
 * 
 * If version1 < version2, return -1.
 * If version1 > version2, return 1.
 * Otherwise, return 0.
 * 
 * 若部份的前面有0，則忽略0，取整數
 * 
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let splitV1 = version1.split("."),splitV2 = version2.split(".");
  let length = Math.max(splitV1.length, splitV2.length);
  for(let i = 0;i < length;i++) {
    let num1 = parseInt(splitV1[i]) || 0;
    let num2 = parseInt(splitV2[i]) || 0;
    
    if(num1 === num2){
      continue;
    }
    return num1 > num2 ? 1 : -1;
  }
  return 0;
};
// let version1 = "1.2", version2 = "1.10"
// -1
let version1 = "1.01", version2 = "1.001";
// 0
console.log(compareVersion(version1,version2))