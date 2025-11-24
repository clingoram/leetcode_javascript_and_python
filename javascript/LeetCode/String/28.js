/**
 * 28. Find the Index of the First Occurrence in a String
 
 * 回傳needle第一次出現在haystack的index，找不到回傳-1
 * 
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};
// let haystack = "leetcode", needle = "leeto";
// -1
let haystack = "sadbutsad", needle = "sad";
// 0
console.log(strStr(haystack,needle));