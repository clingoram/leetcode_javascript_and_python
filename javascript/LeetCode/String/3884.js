/**
 * 3884. First Matching Character From Both Ends
 * 
 * Return the smallest index i such that s[i] == s[s.length - i - 1].
 * 找出最小index，須符合s[i] === s[s.length - i - 1]這條件，若沒有則-1
 * 
 * @param {string} s
 * @return {number}
 */
var firstMatchingIndex = function(s) {
    // TC: O(N)
    // SC: O(1)
    let i = 0,j = s.length - 1;
    while(i <= j){
        if(s[i] === s[j]){
            // 左邊index一定是最小的
            return i;
        }
        i++; // 左邊index ++
        j--; // 右邊index --
    }
    return -1;
};
let s = "abcacbd";
// 1
console.log(firstMatchingIndex(s));