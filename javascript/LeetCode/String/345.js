/**
 * 345. Reverse Vowels of a String
 * 
 * 找出所有母音（不分大小寫），其餘子音維持原位，唯獨反轉母音
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = 'aeiouAEIOU';
    let splitS = s.split("");
    let i = 0, j = s.length - 1;
    while(i < j){
      while(i < j && vowels.indexOf(splitS[i]) == -1){
        i++;
      }
      while(i < j && vowels.indexOf(splitS[j]) == -1) {
        j--;
      }
      // 交換母音
      let chars = splitS[i];
      splitS[i] = splitS[j];
      splitS[j] = chars;
      
      // 2 pointers
      i++;
      j--;
    }
    return splitS.join("");
};
let s = "IceCreAm";
/**
 * Output: "AceCreIm"
 * Explanation:
 * The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".
 * 
 */
console.log(reverseVowels(s));