/**
 * 168. Excel Sheet Column Title
 * 
 * 給定一個整數 columnNumber，傳回其在 Excel 表格中對應的列標題。
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let ans = "";
    let baseASCIICode = "A".charCodeAt();
    while(columnNumber > 0){
      let offset = (columnNumber - 1) % 26;
      ans = String.fromCharCode(baseASCIICode + offset) + ans;
      columnNumber = parseInt((parseInt(columnNumber - 1) / 26));
    }
    return ans;
};
let columnNumber = 701;
// "ZY";
console.log(convertToTitle(columnNumber));
