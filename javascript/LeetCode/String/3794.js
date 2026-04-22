/**
 * 3794. Reverse String Prefix
 * 
 * 反轉s中前k個字母並回傳
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
  // solution 1.
  // return s.substring(0,k).split("").reverse().join("") + s.substring(k);

  // solution 2.
  // 2 pointers
  let result = "";
  let i = 0,j = k - 1; // left side and right side
  let splitS = s.split("");
  while(i < j){
    let letter = splitS[i];
    // swap
    splitS[i] = splitS[j];
    splitS[j] = letter;
    i++;
    j--;
  }
  for (let a = 0; a < splitS.length; a++) {
    result += splitS[a];
  }
  return result;
};
// let s = "abcd", k = 2;
// "bacd"
let s = "hey", k = 1;
// "hey"
console.log(reversePrefix(s,k));