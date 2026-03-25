/**
 * 3760. Maximum Substrings With Distinct Start
 * Difficulty:Medium
 * 
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    // 計算字串中，若每個開頭是跟另一substring開頭不同的字母，可以有幾種組合
    // 計算每個字母出現次數

    // let map = new Map();
    // for(let i = 0; i < s.length;++i) {
    //   map = map.has(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1);
    // }
    // return map.size;

    // solution 2.
    /**
     * TC: O(N) => 
     * 將s弄成陣列，須loop所有元素，因此O(N)
     * new Set(...) 將每個元素插入set，add是O(1)但要做n次，因此O(N)
     * size 讀取長度，因此O(1)
     * 
     * new Set([...s]) 需要loop並插入所有元素，所以整體是O(n)
     * */
    return new Set([...s]).size;
};
let s = "abab";
// 2
console.log(maxDistinct(s))