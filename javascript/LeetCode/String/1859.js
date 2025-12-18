/**
 * 1859. Sorting the Sentence
 * 
 * 字串句子中每個單字最後面都會有個數字，利用該數字重新將句子做排序，但結果每個單字不能有數字。
 * 
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let res = "";
    let splitS = s.split(" ");
    let map = new Map();
    for(let i = 0;i < splitS.length;++i){
      // 取得每個字的最後一個數字，並把它放入new map => key = int,value = str
      const lastInt = parseInt(splitS[i].substring(splitS[i].length - 1));
      map.set(lastInt,splitS[i].substring(0,splitS[i].length - 1));
    }
    // sort map
    var mapAsc = new Map([...map.entries()].sort());
    for(const [key,value] of mapAsc) {
      res += " "+value;
    }
    return res.trim()
};
let s = "is2 sentence4 This1 a3";
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
console.log(sortSentence(s));