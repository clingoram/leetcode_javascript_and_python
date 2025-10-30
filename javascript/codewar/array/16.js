/**
 * Parts of a list (7 kyu)
 * 
 * Divide a list (an array) of at least two elements into two non-empty parts.
 * Elements of a pair must be in the same order as in the original array.
 * 
 * @param {string} arr 
 * @return {string} 二維陣列
 */
function partlist(arr) {
  let result = [];
  for(let i = 1;i < arr.length;++i) {
    let inside = [];
    inside.push(arr.slice(0,i).join(" "));
    inside.push(arr.slice(i).join(" "));
    result.push(inside);
  }
  return result;
}
let arr = ["I", "wish", "I", "hadn't", "come"];
// let expect = [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]]
// console.log(assert.deepEqual(partlist(arr),expect));
console.log(partlist(arr));