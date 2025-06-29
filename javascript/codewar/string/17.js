/**
 * Sort by Last Char
 * 
 * Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
 * If two words have the same last letter, the returned array should show them in the order they appeared in the given string.
 *
 * All inputs will be valid.
 * 
 * @param {string} x
 * @returns {string[]}
 */
function last(x){
  /**
  依單字中最後一個字母做排序，若有超過兩個單字最後一個字母一樣，則維持原先參數顯示的順序顯示
  回傳成陣列
  */
  return x.split(" ").sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}
console.log(assert.deepEqual(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']));