/**
 * 804. Unique Morse Code Words
 * 
 * 給一個字串陣列作為參數，把該陣列內的元素一一拆開成字元，去比對每個字元轉換成摩斯密碼後共有幾個不同的
 * 
 * 英文字母是小寫
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  // 26英文字母分別代表的morse code
  let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

  let set = new Set();
  for(const letter of words){
    let combine = "";
    for(const a of letter) {
      combine += morse[a.charCodeAt(0) - 'a'.charCodeAt(0)];
    }
    set.add(combine);
  }
  return set.size;
};
let words = ["gin","zen","gig","msg"]
/*
Output: 2
Explanation: The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.".
*/
console.log(uniqueMorseRepresentations(words));