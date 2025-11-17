/**
 * 1021. Remove Outermost Parentheses
 * 
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  // () 須相等數量，才能變成一對
  let splitS = s.split("");
  let res = "";
  let count = 1;
  for(let i = 1; i < splitS.length;++i) {
    if(splitS[i] === "("){
      count++;
      if(count > 1){
        res += "(";
      }
    }else{
      if(count > 1){
        res += ")";
      }
      count--;
    }
  }
  return res;
};
// let s = "(()())(())"
// "()()()"
let s = "(()())(())(()(()))";
// "()()()()(())"
// "(()()) (())(()(()))" => (()())
console.log(removeOuterParentheses(s));