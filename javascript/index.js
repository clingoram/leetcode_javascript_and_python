// debugger
import { format } from 'node:path';
import {ExecutionTimer} from './time.js';
import assert from 'node:assert/strict';
import { count } from 'node:console';

/*
22. Generate Parentheses
Difficulty:Medium

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

-----------------
input n=數字
return 出()符合不同的完整排列方式

n=3
return 3個()
-------------------

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]


Constraints:
1 <= n <= 8
*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n < 1) {
    return;
  }

};
// const n = 3;
// should return: ["((()))","(()())","(())()","()(())","()()()"]
// console.log(generateParenthesis(n));

/**
 * 524. Longest Word in Dictionary through Deleting
 * Difficulty:Medium
 * 
 * Given a string s and a string array dictionary, return the longest string in the dictionary that can be formed by deleting some of the given string characters. 
 * If there is more than one possible result, return the longest word with the smallest lexicographical order. 
 * If there is no possible result, return the empty string.
 * 
 * Example 1:
 * Input: s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
 * Output: "apple"
 * 
 * Example 2:
 * Input: s = "abpcplea", dictionary = ["a","b","c"]
 * Output: "a"
 * 
 * Constraints:
 * 1 <= s.length <= 1000
 * 1 <= dictionary.length <= 1000
 * 1 <= dictionary[i].length <= 1000
 * s and dictionary[i] consist of lowercase English letters.
 */
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  /**
   * Input string & array.
   * Output string.
   */
  let pattern = /^[a-z]+$/;
  if (!s.match(pattern) || !s.match(pattern).join("")) {
    return;
  }

  // array.push(), array.pop()
  let splitS = s.split(''); // obj
  let splitDict = dictionary.join('').split(''); // obj

  let result = [];
  let str = '';

  for (let i = 0; i < splitDict.length; i++) {
    splitS.includes(splitDict[i])
  }
  return result;
};
// const s = "abpcplea";
// const dictionary = ["ale", "apple", "monkey", "plea"];
// no 'b','c' in dictionary
// return apple
// console.log(findLongestWord(s, dictionary));


/**
 * 43. Multiply Strings
 * Difficulty:Medium
 *
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
 * Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 *
 * Input num1 and num2 are 非負數以字串方式呈現
 * Output num1 * num2(以字串方式呈現)
 * 不能使用內建含式或直接把Input轉成數字
 * -------------------------------------------
 * Example 1:
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 *
 * Example 2:
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 *
 * Constraints:
 * 1 <= num1.length, num2.length <= 200
 * num1 and num2 consist of digits only.
 * Both num1 and num2 do not contain any leading zero, except the number 0 itself.
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {

  let pattern = /^[0-9]+$/;

  if (!num1.match(pattern) || !num2.match(pattern) || Number(num1) === 0 || Number(num2) === 0) {
    return;
  }



};
// const num1 = "2", num2 = "3";
// "6"
// const num1 = "123", num2 = "456";
// "56088"
// console.log(multiply(num1, num2));



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  // two pointer solution.Big O(n)
  if (nums.length < 1 || !target) {
    return;
  }

  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  let result = [];

  while (left < right) {
    if (nums[left] + nums[right] === target) {
      // return [left + 1, right + 1];
      result.push(left, right);
      left++;
      right--;
    } else if (nums[left] + nums[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return result;
};
// const target = 9;
// const nums = [2, 7, 11, 15];
//            ^          ^
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// const nums = [3, 2, 4];
// const target = 6;
// Output: [1,2]
// nums[1] + nums[2] = 6
// console.log(twoSum(nums, target));



/**
 * 1415. The k-th Lexicographical String of All Happy Strings of Length n
 * 
 * A happy string is a string that:
 * consists only of letters of the set ['a', 'b', 'c'].
 * s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).
 * For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings and strings "aa", "baa" and "ababbc" are not happy strings.
 * 
 * Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order.
 * Return the kth string of this list or return an empty string if there are less than k happy strings of length n.
 * 
 * Hint:
 *  Generate recursively all the happy strings of length n.
 *  Sort them in lexicographical order and return the kth string if it exists.
 * 
 * Example 1:
 * Input: n = 1, k = 3
 * Output: "c"
 * Explanation: The list ["a", "b", "c"] contains all happy strings of length 1. The third string is "c".
 * 
 * Example 2:
 * Input: n = 1, k = 4
 * Output: ""
 * Explanation: There are only 3 happy strings of length 1.
 * 
 * Example 3:
 * Input: n = 3, k = 9
 * Output: "cab"
 * Explanation: There are 12 different happy string of length 3 ["aba", "abc", "aca", "acb", "bab", "bac", "bca", "bcb", "cab", "cac", "cba", "cbc"]. 
 * You will find the 9th string = "cab"
 * 
 * 
 * Constraints:
 * 1 <= n <= 10
 * 1 <= k <= 100
 * 
 * Happy string: 
 *  只含有['a','b','c']、s[i] != s[i+1]
 * 
 * 參數為字串陣列長度為N，和數字K，回傳第K個happy string，若N內happy string少於K，回傳空字串
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  // 只會有a、b、c
  // 先取得a、b、c，符合數字n是第幾個字母
};
// let c = 3, k = 9;
//"cab"
// console.log(getHappyString(c, k));


/**
 * 2099. Find Subsequence of Length K With the Largest Sum
 * 
 * You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.
 * Return any such subsequence as an integer array of length k.
 * 
 * A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
 * 
 * Hints:
 * 1.From a greedy perspective, what k elements should you pick?
 * 2.Could you sort the array while maintaining the index?
 * 
 * Example 1:
 * Input: nums = [2,1,3,3], k = 2
 * Output: [3,3]
 * Explanation:
 * The subsequence has the largest sum of 3 + 3 = 6.
 * 
 * Example 2:
 * Input: nums = [-1,-2,3,4], k = 3
 * Output: [-1,3,4]
 * Explanation: 
 * The subsequence has the largest sum of -1 + 3 + 4 = 6.
 * 
 * Example 3:
 * Input: nums = [3,4,3,3], k = 2
 * Output: [3,4]
 * Explanation:
 * The subsequence has the largest sum of 3 + 4 = 7. 
 * Another possible subsequence is [4, 3].
 *  
 * 
 * Constraints:
 * 1 <= nums.length <= 1000
 * -105 <= nums[i] <= 105
 * 1 <= k <= nums.length
 *  
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
  // 參數為一個數值陣列nums和數值k，找出符合長度k的最大合subsequence
  // subsequence = 在不改變元素位置的情況下，移除或保留元素
  let temp = [];
  let j = 0;
  let obj = {};
  for(let i = 0;i < nums.length;i++){
    obj[i] = nums[i];
  }

  while(temp.length !== k){
    let max = Math.max(...nums);
    const index = nums.indexOf(max);
    if (index > -1) { 
      nums.splice(index, 1);
      temp.push(max);
    }
  }
  console.log(temp)
  // console.log(nums)
  for(const [key,value] of Object.entries(obj)){
    console.log(key)
  }
};
// let nums = [-1,-2,3,4], k = 3;
// [-1,3,4]
// let nums = [3,4,3,3], k = 2;
// [4,3]
// let nums = [2,1,3,3], k = 2;
// 「3,3]
// console.log(maxSubsequence(nums,k))

/**
 * 2186. Minimum Number of Steps to Make Two Strings Anagram II
 * 
 * 兩個字串參數s & t，在一次操作中，可以加上任一字母至s或t中。
 * 回傳讓s和t變成anagrams的最少步驟數
 * 
 * anagrams:長度一樣、字母一樣但排序可以不一樣
 * 
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  // 檢查是否是anagrams可用：sort、count
  let countOP = 0;
  let mapS = new Map();
  let mapT = new Map();
  // 參數s 字母出現次數
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    mapS.has(element) ? mapS.set(element, mapS.get(element) + 1) : mapS.set(element, 1);
  }
  // 參數t 字母出現次數
  for (let i = 0; i < t.length; i++) {
    const element = t[i];
    mapT.has(element) ? mapT.set(element, mapT.get(element) + 1) : mapT.set(element, 1);
  }

  // 字母出現幾次就得是幾次
  // t有但s沒有的字母有幾個 (a,s) 2
  // s有但t沒有的字母有幾個 (l,e,e,d,e) 5
  for(let [key,value] of mapS){
    if(!mapT.has(key)){
      countOP+= value;
    }

  }
  for(let [key,value] of mapT){
    if(!mapS.has(key)){
      countOP+= value;
    }
  }
  return countOP;

  // solution 2.
  // use obj
  // let countOP = 0;
  // let freq = {};
  // for (const element of s) {
  //   freq[element] =  freq[element] || 0) + 1;
  // }
  // for(const element of t) {
  //   if(!freq[element]){
  //     continue;
  //   }
  //   --freq[element];
  //   ++countOP;
  // }
  // return s.length + t.length - countOP * 2;
};
// let s = "leetcode", t = "coats";
/**
 * 7
 * - In 2 steps, we can append the letters in "as" onto s = "leetcode", forming s = "leetcodeas".
 * - In 5 steps, we can append the letters in "leede" onto t = "coats", forming t = "coatsleede".
 * "leetcodeas" and "coatsleede" are now anagrams of each other.
 * We used a total of 2 + 5 = 7 steps.
 * It can be shown that there is no way to make them anagrams of each other with less than 7 steps.
 */
// let s = "cotxazilut",t = "nahrrmcchxwrieqqdwdpneitkxgnt";
// 27
// console.log(minSteps(s,t));



/**
 * Largest three in an array
 * 
 * Given an array arr[], the task is to find the top three largest distinct integers present in the array.
 * Note: If there are less than three distinct elements in the array, then return the available distinct numbers in descending order.
 * 
 * @param {number[]} arr
 * @returns {number[]}
 */
var largestThree = function(arr) {

}
// let arr = [10, 4, 3, 50, 23, 90];
// [90, 50, 23]
// console.log(largestThree(arr));

/**
 * Add Two Fraction
 * 
 * Given two integer arrays a[] and b[] containing two integers each representing the numerator and denominator of a fraction respectively. 
 * The task is to find the sum of the two fractions and return the numerator and denominator of the result.
 * 
 * 參數為數字陣列 a & b，長度各為2，分別代表分數的分子和分母。找出兩個分數的總和並傳回結果的分子和分母。
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
*/
var twoFraction = function(a,b) {

}
// let a = [1, 2] , b = [3, 2];
/**
 * [2, 1] 
 * Explanation: 1/2 + 3/2 = 2/1
 */
// console.log(twoFraction(a,b));


/**
 * K-th Digit in a^b
 * 
 * Given three numbers a, b and k, find k-th digit in ab from right side
 * 
 * @param {number} a
 * @param {number} b
 * @param {number} k
 * @returns {number}
 */
var kthDigit = function(a,b,k){

}
// let a = 3, b = 3, k = 1;
// Output : 7
// Explanation: 3^3 = 27 for k = 1. First digit is 7 in 27
// console.log(kthDigit(a,b,k));

/**
 * Fraction to Recurring Decimal
 * 
 * Given two integers a and b(b != 0), the task is to return the fraction a/b in string format. 
 * If the fractional part is repeating, enclose the repeating part in parentheses.
 * 
 * Examples: 
 * Input: a = 1, b = 2
 * Output: “0.5”
 * Explanation: 1/2 = 0.5 with no repeating part.
 * 
 * 
 * Input: a = 50, b = 22
 * Output: “2.(27)”
 * Explanation: 50/22 = 2.27272727… Since fractional part (27) is repeating, it is enclosed in parentheses.
 * 
 * @param {number} a
 * @param {number} b
 * @returns {string}
 * */
var fractionRecurringDecimal = function (a,b) {
  // 回傳a,b的分數，若小數點皆是重複數字，則加上括號 => .(XXX)
}
// let a = 1,b = 2;
// "0.5"
// console.log(fractionRecurringDecimal(a,b));

/**
 * Recurring Sequence in a Fraction
 * 
 * Given a fraction, find a recurring sequence of digits if it exists, otherwise, print “No recurring sequence”.
 * 
 * Examples:
 * Input  : Numerator = 8, Denominator = 3
 * Output : Recurring sequence is 6 
 * Explanation : 8/3 = 2.66666666…….  
 * 
 * Input : Numerator = 50, Denominator = 22
 * Output : Recurring sequence is 27
 * Explanation : 50/22 = 2.272727272….. 
 * 
 * Input : Numerator = 11, Denominator = 2
 * Output : No recurring sequence
 * Explanation : 11/2 = 5.5
 * 
 * @param {number} n
 * @param {number} d
 * @returns {string}
 */
var RecurringSequenceFraction = function (n,d) {
  

}
// let n = 8,d = 3
// Recurring sequence is 6 
// console.log(RecurringSequenceFraction(n,d));


/**
 * Compute nPr
 * 
 * Given two numbers, n and r, the task is to compute nPr, which represents the number of ways to arrange r elements from a set of n elements. 
 * It is calculated using the formula n!/(n−r)!, where “!” denotes the factorial operation.
 * nPr = n! / (n – r)! 
 */
var ComputenPr = function(n,r) {
  function fact(){
    let res = 1;
    for(let i = 2;i <= n;i++) {
      res *= i;
    }
    return res;
  }
  return fact(n) / fact(n - r);

}
// let n = 5,r = 2
// Output: 20
// Explanation: 5P2 = 5! / (5 – 2)!  = 20
// console.log(ComputenPr(n,r));


/**
 * 1769. Minimum Number of Operations to Move All Balls to Each Box
 * 
 * You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.
 * 
 * In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. 
 * Note that after doing so, there may be more than one ball in some boxes.
 * 
 * Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.
 * Each answer[i] is calculated considering the initial state of the boxes.
 * 
 * HInts:
 * 1.If you want to move a ball from box i to box j, you'll need abs(i-j) moves.
 * 2.To move all balls to some box, you can move them one by one.
 * 3.For each box i, iterate on each ball in a box j, and add abs(i-j) to answers[i].
 * 
 * Example 1:
 * Input: boxes = "110"
 * Output: [1,1,3]
 * Explanation: The answer for each box is as follows:
 * 1) First box: you will have to move one ball from the second box to the first box in one operation.
 * 2) Second box: you will have to move one ball from the first box to the second box in one operation.
 * 3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.
 * 
 * Example 2: 
 * Input: boxes = "001011"
 * Output: [11,8,5,4,3,4]
 *  
 * 
 * Constraints:
 * n == boxes.length
 * 1 <= n <= 2000
 * boxes[i] is either '0' or '1'.
 * 
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
  let result = [];
  for(let i = 0;i < boxes.length;i++) {
    if(boxes.charAt(i) === "1"){
      for(let j = 0;j < boxes.length;j++) {
        result[j] = Math.abs(parseInt(j - i));
      }
    }
  }
  return result;
};
// let boxes = "110";
// [1,1,3]
// console.log(minOperations(boxes));

/**
 * Next Permutation
 * 
 * Given an array arr[] of size n, the task is to print the lexicographically next greater permutation of the given array. 
 * If there does not exist any greater permutation, then find the lexicographically smallest permutation of the given array.
 * Let us understand the problem better by writing all permutations of [1, 2, 4] in lexicographical order: 
 * [1, 2, 4], [1, 4, 2], [2, 1, 4], [2, 4, 1], [4, 1, 2] and [4, 2, 1]. If we give any of the above (except the last) as input, 
 * we need to find the next one in sequence. If we give last as input, we need to return the first one.
 * 
 * Examples:
 * Input: arr = [2, 4, 1, 7, 5, 0]
 * Output: [2, 4, 5, 0, 1, 7]
 * Explanation: The next permutation of the given array is 2 4 5 0 1 7
 * 
 * Input: arr = {3, 2, 1]
 * Output: [1, 2, 3]
 * Explanation: As arr[] is the last permutation. So, the next permutation is the lowest one.
 * 
 * Input: arr = [1, 3, 5, 4, 2]
 * Output: [1, 4, 2, 3, 5]
 * Explanation: The next permutation of the given array is found by rearranging the elements in the next lexicographical order.
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
var nextPermutation = function(arr) {

}
// let arr = [2, 4, 1, 7, 5, 0];
// console.log(nextPermutation(arr));


/**
 * Generate all Subarrays
 * 
 * Given an array arr[], the task is to generate all the possible subarrays of the given array.
 *
 *Examples: 
 *
 *Input: arr[] = [1, 2, 3]
 *Output: [ [1], [1, 2], [2], [1, 2, 3], [2, 3], [3] ]
 *
 *Input: arr[] = [1, 2]
 *Output: [ [1], [1, 2], [2] ]
 *
 * 
 * @param {number[]} arr 
 * @returns {number[][]}
 */
var generateSub = function(arr) {
  let res = [];
  for(let i = 0;i < arr.length;i++) {
    for(let j = i;j < arr.length;j++) {
      for (let k = i; k <= j; k++) {
        res[j] = arr[k];
      }
    }
  }
  return res;
}
// let arr = [1,2,3];
// console.log(generateSub(arr));

/**
 * 2094. Finding 3-Digit Even Numbers
 * 
 * You are given an integer array digits, where each element is a digit. The array may contain duplicates.
 * 
 * You need to find all the unique integers that follow the given requirements:
 * The integer consists of the concatenation of three elements from digits in any arbitrary order.
 * The integer does not have leading zeros.
 * The integer is even.
 * For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.
 * 
 * Return a sorted array of the unique integers.
 * 
 * Hints:
 * 1.The range of possible answers includes all even numbers between 100 and 999 inclusive. 
 * Could you check each possible answer to see if it could be formed from the digits in the array? 
 * 
 * Example 1:
 * Input: digits = [2,1,3,0]
 * Output: [102,120,130,132,210,230,302,310,312,320]
 * Explanation: All the possible integers that follow the requirements are in the output array. 
 * Notice that there are no odd integers or integers with leading zeros.
 * 
 * Example 2:
 * Input: digits = [2,2,8,8,2]
 * Output: [222,228,282,288,822,828,882]
 * Explanation: The same digit can be used as many times as it appears in digits. 
 * In this example, the digit 8 is used twice each time in 288, 828, and 882. 
 * 
 * Example 3:
 * Input: digits = [3,7,5]
 * Output: []
 * Explanation: No even integers can be formed using the given digits.
 *  
 * 
 * Constraints:
 * 3 <= digits.length <= 100
 * 0 <= digits[i] <= 9
 * 
 * 依據參數看能夠組成幾個是偶數且不重複的3位數的數字
 * 
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
  // range from 100 to 999.
  // hash table or set (unique)
  // all elements need to be even.Element length === 3.
  // no leading zero.
  let result = [];
    
};
// let digits = [2,2,8,8,2];
// [222,228,282,288,822,828,882]
// console.log(findEvenNumbers(digits));

/**
 * 1370. Increasing Decreasing String
 * 
 * 
 * 從s中
 * 1. 依序移除最小char並將它加進result內值直到沒有char可移除為止
 * 2.依序移除最大char並將它加進result內值直到沒有char可移除為止
 * 重複這些步驟直到S沒有char為止
 * 若一次要移除的char超過一個，例如很多個b，
 * 
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  // from a to z; from z to a
  // hash table.count occurrence.
  // if result iexist hte char,hash - 1
  let res = "";
  var alp = []
  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); ++i) {
      alp.push(String.fromCharCode(i));
  }
  while(res.length < s.length){
    for(let i = 0;i < 26;i++) {
      if(alp.includes(i)){
        res += alp[i];
        alp[i]--;
      }
    }
    for(let i = 25;i >= 0;i--) {
      if(alp.includes(i)){
        res += alp[i];
        alp[i]--;
      }
    }
  }
  console.log(res);

  // let map = new Map();
  // for(let i = 0;i < s.length;i++) {
  //   let code = s.charCodeAt(i);
  //   map.set(code,(map.get(code) || 0)  + 1);
  // }
  
  // while(res.length < s.length){
  //   for(let i = 0;i < map.size;i++) {
  //     if(map[i]){

  //     }
      
  //   }

   
  // }
  // return res;
};
// let s = "aaaabbbbcccc";
// "abccbaabccba"
// Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
// After steps 4, 5 and 6 of the first iteration, result = "abccba"
// First iteration is done. Now s = "aabbcc" and we go back to step 1
// After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
// After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"
// console.log(sortString(s));

/**
 * 2131. Longest Palindrome by Concatenating Two Letter Words
 * 
 * You are given an array of strings words. Each element of words consists of two lowercase English letters.
 * 
 * Create the longest possible palindrome by selecting some elements from words and concatenating them in any order. Each element can be selected at most once.
 * Return the length of the longest palindrome that you can create. If it is impossible to create any palindrome, return 0.
 * A palindrome is a string that reads the same forward and backward.
 * 
 *  
 * 
 * Example 1:
 * Input: words = ["lc","cl","gg"]
 * Output: 6
 * Explanation: One longest palindrome is "lc" + "gg" + "cl" = "lcggcl", of length 6.
 * Note that "clgglc" is another longest palindrome that can be created.
 * 
 * Example 2:
 * Input: words = ["ab","ty","yt","lc","cl","ab"]
 * Output: 8
 * Explanation: One longest palindrome is "ty" + "lc" + "cl" + "yt" = "tylcclyt", of length 8.
 * Note that "lcyttycl" is another longest palindrome that can be created.
 * 
 * Example 3:
 * Input: words = ["cc","ll","xx"]
 * Output: 2
 * Explanation: One longest palindrome is "cc", of length 2.
 * Note that "ll" is another longest palindrome that can be created, and so is "xx".
 *  
 * 
 * Constraints:
 * 1 <= words.length <= 105
 * words[i].length == 2
 * words[i] consists of lowercase English letters.
 * 
 * 找出words中可組成回文的字串最大長度為何，若無法建立回文，回傳0
 * 每個元素最多只能使用一次
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
  // 4個元素會和在一起，最後將字串2組，各自長度為4，revese檢查
  // return "tylc" === "clyt".split('').reverse().join('');
  let m = new Map();
  let count = 0;
  for(let i = 0;i < words.length;i++) {
    if (!m.has(words[i])) {
      m.set(words[i], 0);
    }
    m.set(words[i], m.get(words[i]) + 1);
  }
  m.forEach((values, keys) => {
    if(values % 2 !== 0){
      // 反轉後是否有在words內
      const reverseKey = [...keys].reverse().join("");
      for(let i = 0;i < words.length;i++) {
        if(reverseKey === words[i]){

        }
      }
    }
  });

 
};
let words = ["ab","ty","yt","lc","cl","ab"];
// 8
// "ty" + "lc" + "cl" + "yt" = "tylc clyt"
// abtyytba
// let words = ["lc","cl","gg"];
// 6
// let words = ["cc","ll","xx"];
// 2
// console.log(longestPalindrome(words));




/**
 * 2929. Distribute Candies Among Children II
 * 
 * You are given two positive integers n and limit.
 * Return the total number of ways to distribute n candies among 3 children such that no child gets more than limit candies.
 * 
 * Hints:
 * 1.We can enumerate the number of candies of one particular child, let it be i which means 0 <= i <= min(limit, n).
 * 2.Suppose the 2nd child gets j candies. Then 0 <= j <= limit and i + j <= n.
 * 3.The 3rd child will hence get n - i - j candies and we should have 0 <= n - i - j <= limit.
 * 4.After some transformations, for each i, we have max(0, n - i - limit) <= j <= min(limit, n - i), each j corresponding to a solution. 
 * So the number of solutions for some i is max(min(limit, n - i) - max(0, n - i - limit) + 1, 0). Sum the expression for every i in [0, min(n, limit)].
 * 
 * Example 1:
 * Input: n = 5, limit = 2
 * Output: 3
 * Explanation: There are 3 ways to distribute 5 candies such that no child gets more than 2 candies: (1, 2, 2), (2, 1, 2) and (2, 2, 1).
 * 
 * Example 2:
 * Input: n = 3, limit = 3
 * Output: 10
 * Explanation: There are 10 ways to distribute 3 candies such that no child gets more than 3 candies: (0, 0, 3), (0, 1, 2), (0, 2, 1), (0, 3, 0), (1, 0, 2), (1, 1, 1), (1, 2, 0), (2, 0, 1), (2, 1, 0) and (3, 0, 0).
 *  
 * 
 * Constraints:
 * 1 <= n <= 106
 * 1 <= limit <= 106
 * 
 * n = 糖果總數;limit = 每個小孩拿到的糖果不能超過該limit值
 * 3個小孩要能得到n個糖果，每個小孩拿到的糖果不能超過limit，共有幾種分法
 * 
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
  let minCandy = Math.min(n,limit);

};
// let n = 3, limit = 3;
// 10
// console.log(distributeCandies(n,limit));

/**
 * 3403. Find the Lexicographically Largest String From the Box I
 * 
 * You are given a string word, and an integer numFriends.
 * Alice is organizing a game for her numFriends friends. There are multiple rounds in the game, where in each round:
 * word is split into numFriends non-empty strings, such that no previous round has had the exact same split.
 * All the split words are put into a box.
 * Find the lexicographically largest string from the box after all the rounds are finished.
 * 
 * Hints:
 * 1.Find lexicographically largest substring of size n - numFriends + 1 or less starting at every index. 
 * 
 * Example 1:
 * Input: word = "dbca", numFriends = 2
 * Output: "dbc"
 * Explanation: 
 * All possible splits are:
 * "d" and "bca".
 * "db" and "ca".
 * "dbc" and "a".
 * 
 * Example 2:
 * Input: word = "gggg", numFriends = 4
 * Output: "g"
 * Explanation: 
 * The only possible split is: "g", "g", "g", and "g".
 * 
 * Constraints:
 * 1 <= word.length <= 5 * 103
 * word consists only of lowercase English letters.
 * 1 <= numFriends <= word.length
 * 
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function(word, numFriends) {
    
};


/**
 * 594. Longest Harmonious Subsequence
 * 
 * harmonious array = 最大值與最小值差1
 * 回傳能夠成harmonious array的子序列長度
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    
};
// let nums = [1,3,2,2,5,2,3,7];
// 5
// console.log(findLHS(nums));

/**
 * 2 Sum - Pair Sum Closest to Target using Binary Search
 * 
 * Given an array arr[] of n integers and an integer target, the task is to find a pair in arr[] such that it’s sum is closest to target.
 * Note: Return the pair in sorted order and if there are multiple such pairs return the pair with maximum absolute difference. 
 * If no such pair exists return an empty array.
 * 
 * 從陣列中找出一組加總後最接近target的陣列元素
 * 以asc排序回傳，若有好幾組，則回傳差最大的
 * 
 * Examples:
 * Input: arr[] = [10, 30, 20, 5], target = 25
 * Output: [5, 20]
 * Explanation: Out of all the pairs, [5, 20] has sum = 25 which is closest to 25.
 * 
 * 
 * Input: arr[] = [5, 2, 7, 1, 4], target = 10
 * Output: [2, 7]
 * Explanation: As (4, 7) and (2, 7) both are closest to 10, but absolute difference of (2, 7) is 5 and (4, 7) is 3. Hence,[2, 7] has maximum absolute difference and closest to target.
 * 
 * Input: arr[] = [10], target = 10
 * Output: []
 * Explanation: As the input array has only 1 element, return an empty array.
 * 
 * 
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[]}  
 */
function sumClosest(arr, target) {
  // binary search
  // arr.sort((a,b) => a - b);
  // let left = 0;
  // let right = arr.length - 1;

  if(arr.length <= 1){
    return [];
  }
  

}
// let arr = [5, 2, 7, 1, 4];
// let target = 10;
// [2,7]
// console.log(sumClosest(arr, target));

/**
 * Closest pair from two sorted arrays
 * 
 * Given two arrays arr1[0...m-1] and arr2[0..n-1], and a number x, 
 * the task is to find the pair arr1[i] + arr2[j] such that absolute value of (arr1[i] + arr2[j] - x) is minimum.
 * 
 * Example: 
 * Input:  
 * arr1[] = {1, 4, 5, 7};
 * arr2[] = {10, 20, 30, 40};
 * x = 32
 * Output:  1 and 30
 * 
 * Input:  
 * arr1[] = {1, 4, 5, 7};
 * arr2[] = {10, 20, 30, 40};
 * x = 50      
 * Output:  7 and 40
 * 
 * 兩個數值陣列參數和數值x，找出arr1[i] + arr2[j] 是arr1[i] + arr2[j] - x的最小值
 * 
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} x
 * @return {number[]}
 */
var closetPair = function(arr1,arr2,x) {
  let result = [];
  for(let i = 0;i < arr1.length;i++) {

  }

}
// let arr1 = [1,4,5,7],arr2 = [10,20,30,40],x = 32; 
// [1,30];
// console.log(closetPair(arr1,arr2,x));

/**
 * 166. Fraction to Recurring Decimal
 * 
 * 參數為分子、分母，以字串資料型態回傳分數 
 * 如果小數部分重複，則將重複部分放在括號中。
 * 若有很多個答案，任一回傳
 * 
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    
};
let numerator = 1, denominator = 2;
// "0.5"
// console.log(fractionToDecimal(numerator,denominator));



/**
 * 3318. Find X-Sum of All K-Long Subarrays I
 * 
 * 計算每個元素出現次數但只保留出現次數 = x 次的元素，若有超過2個元素，則只保留元素較大的那個
 * 以陣列型態計算連續子陣列元素總和
 * 
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
	// 將nums切成長度 = k的陣列，並計算在該陣列裡面有幾個元素出現次數 = x的
	// 最後將符合的加總，並組成新陣列，形成元素i
  let res = [];
	// let map = new Map();
	// for(let i = 0;i < k;++i) {
	// 	map.has(nums[i]) ? map.set(nums[i],map.get(nums[i]) + 1) : map.set(nums[i],1);
	// }
  let i = 0;
  while(i < k){
    let sub = nums[i];
    console.log(sub);
    i++;
  }
  // for(let i = 0;i < k;++i) {
  //   console.log(nums[i])
  // }

};
// let nums = [1,1,2,2,3,4,2,3], k = 6, x = 2;
// [6,10,12]
// For subarray [1, 1, 2, 2, 3, 4], only elements 1 and 2 will be kept in the resulting array. Hence, answer[0] = 1 + 1 + 2 + 2.
// For subarray [1, 2, 2, 3, 4, 2], only elements 2 and 4 will be kept in the resulting array. Hence, answer[1] = 2 + 2 + 2 + 4. Note that 4 is kept in the array since it is bigger than 3 and 1 which occur the same number of times.
// For subarray [2, 2, 3, 4, 2, 3], only elements 2 and 3 are kept in the resulting array. Hence, answer[2] = 2 + 2 + 2 + 3 + 3.
// console.log(findXSum(nums,k,x));

/**
 * 1015. Smallest Integer Divisible by K
 * 
 * 找出最小能被k整除了數字，且該數字只有1位數
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    
};
// let k = 2;
// -1
// console.log(smallestRepunitDivByK(k));


/**
 * 3583. Count Special Triplets
 * 
 * special triplet = index i,j,k
 * 0 <= i < j < k < nums.length
 * nums[i] === nums[j] * 2
 * nums[k] === nums[j] * 2
 * return it modulo 10的9次方 + 7.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function(nums) {
    let ans = 0;
    // j as the middle of the triplet.
    // For each j, you only need:
    // how many values equal to 2 * nums[j] appear before j
    // how many appear after j
    // Then the contribution from index j is just:
    // leftCount * rightCount
    // let j = Math.floor(nums[nums.length % 2 ]);
    // // console.log(j)
    // for(let i = 0;i < nums.length;++i) {

    // }

    /**
     * j = middle index
     * 在j之前，檢查nums[i] === nums[j] * 2 的有幾個
     * 在j之後，檢查nums[k] === nums[j] * 2 的有幾個
     */
    // let left = new Map();
    // let right = new Map();
    let j = Math.round(nums.length % 2);
    for(let i = 0;i < nums.length;++i) {
      if(nums[i] === nums[j] * 2 && i < j){
        ans++;
      }
    }
    console.log(ans)
};
// let nums = [8,4,2,8,4];
/**
 * 2
 * 
 * There are exactly two special triplets:
 * (i, j, k) = (0, 1, 3)
 * nums[0] = 8, nums[1] = 4, nums[3] = 8
 * nums[0] = nums[1] * 2 = 4 * 2 = 8
 * nums[3] = nums[1] * 2 = 4 * 2 = 8
 * 
 * (i, j, k) = (1, 2, 4)
 * nums[1] = 4, nums[2] = 2, nums[4] = 4
 * nums[1] = nums[2] * 2 = 2 * 2 = 4
 * nums[4] = nums[2] * 2 = 2 * 2 = 4
 */
// console.log(specialTriplets(nums));



/**
 * 345. Reverse Vowels of a String
 * 
 * 找出所有母音（不分大小寫），其餘子音維持原位，唯獨反轉母音
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ["a","e","i","o","u","A","E","I","O","U"];
    let splitS = s.split("");
    // 2 pointer?
    let j = splitS.length - 1,i = 0;
    while(i < j){
      if(!vowels.includes(splitS[i],i)){
        i++;
        continue;
      }
      if(!vowels.includes(splitS[j],j)){
        j--;
        continue;
      }
      let char = splitS[i];
      splitS[i] = splitS[j];
      splitS[j] = char;
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
// console.log(reverseVowels(s));

/**
 * Alphabet symmetry
 * 
 * 參數為有英文字母但大小寫不一定的陣列，依據26個字母順序來看：a - z /A - Z = 1 ~ 26，以陣列型態回傳元素字母與26個字母對應且字母順序正確的有幾個
 * 
 * EG.["abode","ABc","xyzD"]) = [4, 3, 1]
 * 說明：
 * a,b = 在26個順序中是1,2 且在這也是1,2;
 * d,e = 在26個順序中是4,5 且在這也是4,5 => 總共有4個字母出現順序正確
*/
function solve(arr){
  // 元素字母有大小寫
  // 同一元素字串可能會有重複的字母
  let letterObj = generateAlphabet();
  // console.log(letterObj)
  let map = new Map();
  // let set  = new Set();
  let result = [];
  let count = 0;
  let baseASCIICode = "A".charCodeAt();
  for(const letter of arr){
    let element = letter.toLowerCase()
    for(let i = 0;i < element.length;++i) {
      let ascii = element.charCodeAt(i);
      if(ascii+1 === element.charAt(i)){
        count++;
        continue;
       
      }
      if(count === element.length){
        count = 0;
      }
      result.push(count);
    }
    console.log(result)
    // let set = new Set( [...letter.toLowerCase().split("")].join(''))
    // console.log([...set].join(""))
    // let toStrFromSet = [...set].join("");
    
    // for(let i = 0;i < toStrFromSet.length;++i) {
    //   console.log(toStrFromSet[i]);

    // }
  }

   /**
     * 產生26個英文字母
     * a = 26,b = 25 ....
     * @returns obj
     */
    function generateAlphabet(){
      let start = "a";
      let end = "z";
      let alp = new Map();
      let range = 26;
      let i = start.charCodeAt(0), j = end.charCodeAt(0);
      for (; i <= j; ++i) {
        // alp[String.fromCharCode(i)] = range--;
        alp.set(String.fromCharCode(i),range--);
      }
      return alp;
    }

  // console.log(letterObj)
};
let arr = ["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"];
// describe("Basic tests", () => {
//   it("Fixed tests", () => {
//     assert.deepEqual(solve(["abode","ABc","xyzD"]),[4,3,1]);
//     assert.deepEqual(solve(["abide","ABc","xyz"]),[4,3,0]);
//     assert.deepEqual(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]),[6, 5, 7]);
//     assert.deepEqual(solve(["encode","abc","xyzD","ABmD"]),[1, 3, 1, 3]);
//   });
// });
console.log(solve(arr))