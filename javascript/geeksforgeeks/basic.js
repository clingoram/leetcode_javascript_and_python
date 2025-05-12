/**
 * Check Even or Odd
 * Given a number n, check whether it is even or odd. Return true for even and false for odd.
 * 
 * Example :
 * Input: 2 
 * Output: true
 * 
 * @param {number} s
 * @returns {boolean}
*/
var checkEvenOrOdd = function(s) {
    /**
     * Time Complexity – O(1)
     * Space Complexity – O(1)
     */
    return s % 2 === 0;
}
// let s = 12;
// console.log(checkEvenOrOdd(s));

/**
 * Multiplication Table
 * Given a number n, we need to print its table.
 * 印出n的99乘法表
 * 
 * @param {number} n
 * @returns 
 */
var multiplicationOfN = function(n) {
    /**
     * Time Complexity – O(1)
     * Space Complexity – O(1)
     */
    // from 1 to 9.
    for(let i = 1;i < 10;i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}
// let s = 5;
// console.log(multiplicationOfN(s));

/**
 * Sum of Naturals
 * 
 * Given a number n, find the sum of the first n natural numbers.
 * 取得n的加總
 */
var sumNaturals = function(n) {
    /**
     * solution 1.
     * Time Complexity – O(n)
     * Space Complexity – O(1)
     */
    // let sum = 0;
    // for(let i = 1;i <= s;i++) {
    //     sum+=i;
    // }
    // return sum;

    /**
     * solution 2.
     * 加總公式：(n * (n+1)) / 2
     * 
     * Time Complexity – O(1)
     * Space Complexity – O(1)
     */
    if (n % 2 === 0){
        return (n / 2) * (n + 1);
    }else{
        return ((n + 1) / 2) * n;
    }
}
// let s = 5;
// console.log(sumNaturals(s));

/**
 * Swap Two Numbers
 * Given two numbers a and b, the task is to swap them.
 * @param {number} a 
 * @param {number} b
*/
var swapAandB = function(a,b) {
    /**
     * Time Complexity: O(1)
     * Auxiliary Space: O(1)
     */
    let temp = b;
    b = a;
    a = temp;
    console.log(a);
    console.log(b);
}
// let a = 2,b = 3;
// // a = 3,b = 2
// console.log(swapAandB(a,b));

/**
 * Closest Number
 * 
 * Given two integers n and m (m != 0). 
 * Find the number closest to n and divisible by m. 
 * If there is more than one such number, then output the one having maximum absolute value.
 * 
 * 找出最接近n且能被m整除的數
 */
var closetN = function (n,m) {
    /**
     * Time Complexity – O(m)
     * Space Complexity – O(1)
     */
    // answer: +-n
    let answer = 0;
    let minDifference = Infinity;
    let start =  n - Math.abs(m);
    let end = n + Math.abs(m);

    for(let i = start;i <= end; i++){
        if(i % m === 0){
            let difference = Math.abs(n - i);

            if(difference < minDifference || (difference === minDifference && Math.abs(i) > Math.abs(answer))){
                answer = i;
                minDifference = difference;
            }
        }
    }
   
    return answer;
}
// let n = 13, m = 4;
// 12
// console.log(closetN(n,m));

/**
 * Dice Problem
 * 
 * You are given a cubic dice with 6 faces. All the individual faces have a number printed on them. 
 * The numbers are in the range of 1 to 6, like any ordinary dice. 
 * You will be provided with a face of this cube, your task is to guess the number on the opposite face of the cube.
 * 
 * 假設n是骰子某一面數字，回傳n的另一面
 * 
 * @param {number} n
 * @returns {number}
 */
var dice = function (n) {
    // 任兩面總合都會是7
    /**
     * Time Complexity: O(1)
     * Auxiliary Space: O(1)
     */
    return 7 - n;
}
// let n = 2;
// 5 （2的另一面是5）
// console.log(dice(n));

/**
 * Nth Term of AP
 * 
 * Given two integers a1 and a2, the first and second terms of an Arithmetic Series respectively, the problem is to find the nth term of the series. 
 * 
 * 3個參數，a1為起始數字，a2為第二個數字，回傳依照這順序第n個數字
 */
var nth = function (a1,a2,n) {
    /**
     * Time Complexity - O(n)
     * Auxiliary Space - O(1)
     */
    let step = a2 - a1;
    let ans = a1;
    for(let i = 1;i < n;i++) {
        ans += step;
    }
    return ans;
}
// let a1 = 2,  a2 = 3,  n = 4;
// 5
// console.log(nth(a1,a2,n));

/**
 * Print Alternates
 * 
 * Given an array arr[], the task is to print every alternate element of the array starting from the first element.
 * 
 * Examples:
 * Input: arr[] = [10, 20, 30, 40, 50]
 * Output: 10 30 50
 * Explanation: Print the first element (10), skip the second element (20), print the third element (30), skip the fourth element(40) and print the fifth element(50).
 * 
 * Input: arr[] = [-5, 1, 4, 2, 12]
 * Output: -5 4 12
 * 
 * @param {number} arr
 * @returns {number} 
*/
var printAlternates = function(arr) {
  let res = [];
  for(let i = 0;i < arr.length;i+=2){
    res.push(arr[i]);
  }
  return res;
}
// let arr = [10, 20, 30, 40, 50];
// console.log(printAlternates(arr));