/**
 * 2325. Decode the Message
 * 
 * 給兩個字串參數，key & message，使用message的字母去一一比對key要表達的意思。
 * key長度是26個字母，從第一個字母到最後一個字母可以把它轉換成a-z，就能解出是什麼
 * 
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
  // 26個英文字母
  // map
  let removeWhiteSpace = key.replaceAll(" ","");
  let alp = new Map();
  let result = "";
  let currentChar = 'a'.charCodeAt(0);
  for(let a = 0;a < removeWhiteSpace.length;a++) {
    // if (alp.has(removeWhiteSpace[a])){
    //   continue;
    // }
    alp.set(removeWhiteSpace[a],String.fromCharCode(currentChar++));
  }
  for(const v of message) {
    if(alp.get(v)){
      result += alp.get(v);
    }else{
      result += " ";
    }
  }
  return result;
};
let key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv";
// "this is a secret"
console.log(decodeMessage(key,message));