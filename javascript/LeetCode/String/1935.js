/**
 * 1935. Maximum Number of Words You Can Type
 * 
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const broken = new Set(brokenLetters);
    const split = text.split(" ");
    let ans = 0;
   
    for(const t of split) {
     for(const c of t) {
      if(broken.has(c)){
        ans++;
      }
     }
    }
    return ans;
};
let text = "hello world", brokenLetters = "ad";
// 1
console.log(canBeTypedWords(text,brokenLetters));