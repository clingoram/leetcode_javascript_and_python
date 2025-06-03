/**
 * Remove consecutive duplicate words
 * 
 * Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
 * "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
 * 
 * --> "alpha beta gamma delta alpha beta gamma delta"
 * Words will be separated by a single space. There will be no leading or trailing spaces in the string. An empty string (0 words) is a valid input.
 * 
 * @param {string} string 
 * @returns {string}
 */
function removeConsecutiveDuplicates(string) {
  // 移除"連續重複出現"的字（若是連續出現的，只保留第一個字）
  let result = "";
  let split = string.split(" ");
  for(let i = 0;i < split.length;i++) {
    if(split[i] !== split[i - 1]){
      result += " " +split[i];
    }
  }
  return result.trim("");
}
let a = "alpha alpha beta alpha alpha";
// "alpha beta alpha"
console.log(removeConsecutiveDuplicates(a))