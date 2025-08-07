/**
 * 3 Divisors
 * 
 * Given a number n, print all numbers in the range from 1 to n having exactly 3 divisors. 
 * @param {number} n
 * @returns {number[]}
 */
var threeDivisor = function(n) {
    let ans = [];
    // 計算n整除的有幾個
    function countDivisors(n){
      let count = 0;
      for(let i = 1;i <= n;i++){
        if(n % i === 0){
          count++;
        }
      }
      return count;
    }
   
    for(let i = 1;i <= n;i++) {
      // count = 3的
      if(countDivisors(i) === 3){
        ans.push(i);
      }
    }
    return ans;
}
// let n = 16;
// Output: 4 9
// Explanation: 4 and 9 have exactly three divisors.
// console.log(threeDivisor(n));

/**
 * Divisible by 4
 * 
 * Given a number, the task is to check if a number is divisible by 4 or not. 
 * The input number may be large and it may not be possible to store even if we use long long int.
 * 
 * 是否能被4整除
 * 
 * @param {number} n
 * @returns {boolean}
 */
var divisibleByFour = function(n) {
    /**
     * Time Complexity – O(1)
     * Auxiliary Space – O(1)
     */
    return n % 4 === 0;
}
// let n = 1124;
// true
// console.log(divisibleByFour(n));

/**
 * Divisibility by 11
 * 
 * Given a number, the task is to check if the number is divisible by 11 or not. 
 * The input number may be large and it may not be possible to store it even if we use long long int.
 * 
 * @param {number} n
 * @returns {boolean}
 */
var dividibleBy11 = function(n) {
  /**
   * Time Complexity: O(1)
   * Auxiliary Space: O(1)
   */
    return n % 11 === 0;
}
// let n = 76945;
// true
// console.log(dividibleBy11(n));

/**
 * Divisibility by 13
 * 
 * Given a large number, the task is to check if the number is divisible by 13 or not.
 * 
 * @param {number} n
 * @returns {boolean}
 */
var dividibleBy13 = function(n) {
  /**
   * Time Complexity: O(1)
   * Auxiliary Space: O(1)
   */
    return n % 13 === 0;
}
// let n = 637;
// true
// console.log(dividibleBy13(n));

/**
 * All Factor (Or Divisors)
 * 
 * Given a natural number n, print all distinct divisors of it.
 * 
 * Examples:
 * Input: n = 10       
 * Output: 1 2 5 10
 * Explanation: 1, 2, 5 and 10 are the factors of 10. 
 * 
 * Input: n = 100
 * Output: 1 2 4 5 10 20 25 50 100
 * Explanation: 1, 2, 4, 5, 10, 20, 25, 50 and 100 are factors of 100.
 * 
 * Input: n = 125
 * Output: 1 5 25 125
 * 
 * 找出n能整除的數
 * 
 * @param {number} n 
 * @returns {number[]}
 */
var factor = function(n) {
  /**
   * Time Complexity : O(n) 
   * Auxiliary Space : O(1)
   */
  let res = [];
  for(let i = 1;i <= n;i++) {
    if(n % i === 0){
      res.push(i);
    }
  }
  return res;
}
// let n = 10;
// [1,2,5,10]
// console.log(factor(n));

/**
 * Prime Factorization
 * 
 * Given an integer n, write a program to find and print all the prime factors of n. 
 * A prime factor is a prime number that divides n exactly (without leaving a remainder).
 * 
 * Examples:
 * Input: n = 36
 * Output: 2 2 3 3
 * Explanation: For n = 36, dividing by 2 twice and 3 twice gives the prime factors 2, 2, 3, 3.
 * 
 * Input: n=97
 * Output: 97 
 * Explanation: Since 97 is a prime number, it is its own prime factor.
 * 
 * Input: n = 50
 * Output: 2 5 5
 * Explanation: Dividing 50 by 2 once and 5 twice gives the prime factors 2, 5, 5.
 * 
 * 找出能整除n 的質數
 * 
 * 質數：在大於1的自然數中，除了和該數自身外，無法被其他自然數整除的數。反之則稱為合數（除了1和自己外，還能被其他數字整除）
 * 
 * @param {number} n 
 * @returns {number[]}
 */
var primeFactorization = function (n) {
  let res = [];
  while(n % 2 === 0){
    res.push(2);
    n = Math.floor(n / 2);
  }
  for(let i = 3;i <= Math.sqrt(n);i+=2) {
    while (n % i === 0){
      res.push(i);
      n = Math.floor(n / i);
    }
  
    if (n > 2){
      console.log(n + "");
    }
  }
  return res;
}
// let n = 36;
// [2,2,3,3]
// 36 / 2 ＝ 12; 12 / 2 = 6
// 36 / 3 ＝ 12; 12 / 3 = 4
// console.log(primeFactorization(n)); 

/**
 * Largest Prime factor
 * 
 * Given a positive integer n ( 1 <= n <= 1015). Find the largest prime factor of a number. 
 * 
 * Input: 6
 * Output: 3
 * Explanation Prime factor are 2 and 3. Largest of them is 3.
 * 
 * Input: 15
 * Output: 5
 * Explanation: Prime factors are 3 and 5. The largest of them is 5.
 * 
 * Input: 28
 * Output: 7
 * Explanation: Prime factors are 2 and 7. The largest of them is 7.
 * 
 * 
 * @param {number} n 
 * @returns {number}
 */
var largestPrimeFactor = function(n) {
  let maxPrime = -1;
  while(n % 2 === 0){
    maxPrime = 2;
    n/=2;
  }
  for(let i = 3;i *i < n;i+=2){
    while(n % i === 0){
      maxPrime = i;
      n /= i;
    }
  }
  if(n > 2){
    maxPrime = n;
  }
  return maxPrime;

}
// let n = 28;
// console.log(largestPrimeFactor(n));

/**
 * Modular Exponentiation
 * 
 * Modular Exponentiation is the process of computing: xy (mod  p). where x, y, and p are integers. 
 * It efficiently calculates the remainder when xy is divided by p or (xy) % p, even for very large y.
 * 
 * Examples : 
 * Input:  x = 2, y = 3, p = 5
 * Output: 3
 * Explanation: 2^3 % 5 = 8 % 5 = 3.
 * 
 * Input:  x = 2, y = 5, p = 13
 * Output: 6
 * Explanation: 2^5 % 13 = 32 % 13 = 6.
 * 
 * 
 * @param {number} x 
 * @param {number} y 
 * @param {number} p 
 * @returns {number}
 */
var modularExpo = function(x,y,p) {
  return Math.pow(x,y) % p;
}
// let x = 2, y = 3, p = 5;
// console.log(modularExpo(x,y,p));

/**
 * nth Catalan Number
 * 
 * Catalan numbers occur in many interesting counting problems like the following.
 * Count the number of expressions containing n pairs of parentheses that are correctly matched.
 * Count the number of possible Binary Search Trees with n keys (See this)
 * Count the number of full binary trees (A rooted binary tree is full if every vertex has either two children or no children) with n+1 leaves.
 * Given a number n, return the number of ways you can draw n chords in a circle with 2 x n points such that no 2 chords intersect.
 * 
 */
var catalanN = function(n) {
  if(n <= 1){
    return 1;
  }
  let res = 0;
  for(let i = 0;i < n;i++) {
    res += catalanN(i) * catalanN(n - i - 1);
  }
  return res;
}
// let n = 6;
// 132
// console.log(catalanN(n));

/**
 * Binomial Coefficient
 * 
 * Given an integer values n and k, the task is to find the value of Binomial Coefficient C(n, k).
 * 
 * A binomial coefficient C(n, k) can be defined as the coefficient of x^k in the expansion of (1 + x)^n.
 * A binomial coefficient C(n, k) also gives the number of ways, disregarding order, that k objects can be chosen from among n objects more formally, 
 * the number of k-element subsets (or k-combinations) of a n-element set.
 * 
 * Examples
 * Input: n = 4, k = 2
 * Output: 6
 * Explanation: The value of 4C2 is (4 × 3) / (2 × 1) = 6.
 * 
 * Input: n = 5, k = 2
 * Output: 10
 * Explanation: The value of 5C2 is (5 × 4) / (2 × 1) = 10.
 * 
 * Input: n = 6, k = 3
 * Output: 20
 * Explanation: The value of 6C3 is (6 × 5 × 4) / (3 × 2 × 1) = 20.
 * 
 * @param {number} n 
 * @param {number} k 
 * @returns {number}
 */
var binomialCo = function(n,k) {
  if(k > n){
    return 0;
  }
  if(k === n || k === 0){
    return 1;
  }
  return binomialCo(n - 1,k - 1) + binomialCo(n - 1,k);
}
// let n = 4, k = 2;
// console.log(binomialCo(n,k));

/**
 * Triplets with zero sum
 * 
 * Given an array arr[], the task is to find all possible indices {i, j, k} of triplet {arr[i], arr[j], arr[k]} such 
 * that their sum is equal to zero and all indices in a triplet should be distinct (i != j, j != k, k != i). 
 * 
 * We need to return indices of a triplet in sorted order, i.e., i < j < k.
 * 
 * Examples 
 * Input: arr[] = {0, -1, 2, -3, 1}
 * Output: {{0, 1, 4}, {2, 3, 4}}
 * Explanation:  Two triplets with sum 0 are:
 * arr[0] + arr[1] + arr[4] = 0 + (-1) + 1 = 0
 * arr[2] + arr[3] + arr[4] = 2 + (-3) + 1 = 0
 * 
 * Input: arr[] = {1, -2, 1, 0, 5}
 * Output: {{0, 1, 2}}
 * Explanation: Only triplet which satisfies the condition is arr[0] + arr[1] + arr[2] = 1 + (-2) + 1 = 0
 * 
 * Input: arr[] = {2, 3, 1, 0, 5}
 * Output: {{}}
 * Explanation: There is no triplet with sum 0
 * 
 * @param {number[]} arr 
 * @returns {number[][]} arr
 */
var TripletsWithZeroSum = function(arr) {
  // sum = 0;
  // i != j,j != k, k != i;
  // return indices.
  let res = [];
  for(let i = 0;i < arr.length - 2;i++) {
    for(let j = i + 1;j < arr.length - 1;j++) {
      for(let k = j + 1;k < arr.length;k++) {
        if(arr[i] + arr[j] + arr[k] === 0 && i !== j && j !== k && k !== i){
          res.push([i,j,k]);
        }
      }
    }
  }
  return res;
}
// let arr = [0, -1, 2, -3, 1];
// [[0, 1, 4],[2, 3, 4]]
// console.log(TripletsWithZeroSum(arr));

/**
 * Partition Point
 * 
 * Given an array, find an element before which all elements are equal or smaller than it, and after which all the elements are equal or greater.
 * 
 * Note: Print -1, if no such element exists.
 * 
 * Examples:
 * Input: arr[] = [5, 1, 4, 3, 6, 8, 10, 7, 9]
 * Output: 6 
 * Explanation: 6 is present at index 4. All elements on the left of arr[4] are smaller than it and all elements on right are greater.
 * 
 * Input: arr[] = [5, 1, 4, 4]
 * Output: -1 
 * Explanation: No such element exists.
 * 
 * 找到一個元素，使得它之前的所有元素都等於或小於它，並且它之後的所有元素都等於或大於它。
 * 若沒有回傳-1
 * 
 * @param {number[]} arr
 * @returns {number}
 */
var PartitionPoint = function(arr) {

  const timer = new ExecutionTimer();
  timer.execute(() => {

    let p = Math.floor(arr.length / 2);
    let leftSide = [];
    let rigthtSide = [];
    for(let i = 0;i < arr[p];i++) {
      if(arr[i] < arr[p]){
        leftSide.push(true);
      }
    }
    for(let i = p;i < arr.length;i++){
      if(arr[i] >= arr[p]){
        rigthtSide.push(true);
      }
    }
    return leftSide.length + rigthtSide.length === arr.length ? arr[p] : -1;
  });
}
// let arr = [5, 1, 4, 3, 6, 8, 10, 7, 9];
// 6
// let arr = [5, 1, 4, 4];
// -1
// let arr = [6,2,12,9,8,3,5];
// -1
// console.log(PartitionPoint(arr));

/**
 * Largest pair sum
 * 
 * Given an unsorted of distinct integers, find the largest pair sum in it. For example, the largest pair sum is 74. 
 * If there are less than 2 elements, then we need to return -1.
 * 
 * Input :  arr[] =  {12, 34, 10, 6, 40},  
 * Output :  74
 * 
 * Input : arr[]  = {10, 10, 10},   
 * Output : 20
 * 
 * Input  arr[]  = {10},  
 * Output :  -1
 * 
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
var largestPairSum = function(arr) {
  if(arr.length < 2){
    return -1;
  }
  arr.sort((a,b) => b - a);
  return arr[0] + arr[1];
}
// let arr = [12,34,10,6,40];
// 74
// console.log(largestPairSum(arr));

/**
 * K’th Smallest in Unsorted Array
 * 
 * Given an array arr[] of N distinct elements and a number K, where K is smaller than the size of the array. 
 * Find the K’th smallest element in the given array.
 * 
 * Examples:
 * 
 * Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 3 
 * Output: 7
 * 
 * Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 4 
 * Output: 10 
 * 
 * @param {number[]} arr 
 * @param {number} k
 * @returns {number} 
 */
var kthSmallest = function(arr,k) {
  arr.sort((a,b) => a - b);
  return arr[k - 1];
}
// let arr = [7, 10, 4, 3, 20, 15],k = 3;
// 7
// console.log(kthSmallest(arr,k));

/**
 * Search an in a sorted and rotated
 * 
 * Given a sorted and rotated array arr[] of n distinct elements, the task is to find the index of given key in the array. 
 * If the key is not present in the array, return -1.
 *
 *Examples:  
 *
 *Input: arr[] = [5, 6, 7, 8, 9, 10, 1, 2, 3], key = 3
 *Output: 8
 *Explanation: 3 is present at index 8 in arr[].
 *
 *Input: arr[] = [3, 5, 1, 2], key = 6
 *Output: -1
 *Explanation: 6 is not present in arr[].
 *
 *Input: arr[] = [33, 42, 72, 99], key = 42
 *Output: 1
 *Explanation: 42 is found at index 1.
 *
 * 
 * @param {number[]} arr 
 * @param {number} k
 * @returns {number} 
 */
var searchSortedRotated = function(arr,k) {
  // return index
  let ans = -1;
  for(let i = 0;i< arr.length;i++) {
    if(arr[i] === k){
      ans = i;
    }
  }
  return ans;
}
// let arr = [5, 6, 7, 8, 9, 10, 1, 2, 3],k = 3;
// console.log(searchSortedRotated(arr,k));
/**
 * Peak Element in Array
 * 
 * Given an array arr[] where no two adjacent elements are same, find the index of a peak element. 
 * An element is considered to be a peak element if it is strictly greater than its adjacent elements. 
 * If there are multiple peak elements, return the index of any one of them.
 * 
 * Note: Consider the element before the first element and the element after the last element to be negative infinity.
 * 
 * Examples:
 * Input: arr[] = [1, 2, 4, 5, 7, 8, 3]
 * Output: 5
 * Explanation: arr[5] = 8 is a peak element because arr[4] < arr[5] > arr[6].
 * 
 * Input: arr[] = [10, 20, 15, 2, 23, 90, 80]
 * Output: 1 or 5
 * Explanation: arr[1] = 20 and arr[5] = 90 are peak elements because arr[0] < arr[1] > arr[2] and arr[4] < arr[5] > arr[6].
 * 
 * Input: arr[] = [1, 2, 3]
 * Output: 2
 * Explanation: arr[2] is a peak element because arr[1] < arr[2] and arr[2] is the last element, so it has negative infinity to its right.
 */
var peak = function(arr){
  // 找出比前面和後面元素大的index
  let ans = 0;
  // 長度只有1或arr[0] > arr[1] 
  if(arr.length === 1 || arr[0] > arr[1]){
    return ans;
  }
  if(arr[arr.length - 1] > arr[arr.length - 2]){
    return arr.length - 1;
  }
  let left = 1;
  let right = arr.length - 2;
  while(left <= right){
    let mid = left + Math.floor((right - left) / 2);

    if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]){
      return mid;
    }else if(arr[mid] < arr[mid + 1]){
      left++;
    }else{
      right--;
    }
  }
  return 0;
}
// let arr = [10, 20, 15, 2, 23, 90, 80];
// 1 or 5
// console.log(peak(arr));

/**
 * Min in a sorted and rotated
 * 
 * Given a sorted array of distinct elements arr[] of size n that is rotated at some unknown point, the task is to find the minimum element in it. 
 * 
 * Examples: 
 * Input: arr[] = [5, 6, 1, 2, 3, 4]
 * Output: 1
 * Explanation: 1 is the minimum element present in the array.
 * 
 * Input: arr[] = [3, 1, 2]
 * Output: 1
 * Explanation: 1 is the minimum element present in the array.
 * 
 * Input: arr[] = [4, 2, 3]
 * Output: 2
 * Explanation: 2 is the only minimum element in the array.
 */
var findMin = function(arr) {
  // 題意：找出最小的element

  // solution 1.
  // return Math.min(...arr);

  // solution 2.
  // let min = arr[0];
  // for(let i = 0;i < arr.length;i++) {
  //   if(arr[i] < min){
  //     min = arr[i];
  //   }
  // }
  // return min;

  // solution 3.
  let left = 0;
  let right = arr.length - 1;
  while(left <= right){
    if(arr[left] < arr[right]){
      return arr[left];
    }
    let mid = left + Math.floor((right - left) / 2);

    if(arr[mid] > arr[right]){
      right++;
    }else{
      left = mid;
    }
  }
  return arr[left];
}
// let arr = [5, 6, 1, 2, 3, 4];
// 1
// console.log(findMin(arr));

/**
 * Find a Fixed Point in a given array
 * 
 * Given an array of n distinct integers sorted in ascending order, the task is to find the First Fixed Point in the array. Fixed Point in an array is an index i such that arr[i] equals i. Note that integers in the array can be negative. 
 * 
 * Note: If no Fixed Point is present in the array, print -1.
 * 
 * Examples: 
 * Input: arr[] = [-10, -5, 0, 3, 7]
 * Output: 3  
 * Explanation: The value at index 3 of array arr[] is 3, which is equal to the index.
 * 
 * Input: arr[] = [0, 2, 5, 8, 17]
 * Output: 0  
 * Explanation: The value at index 0 of array arr[] is 0, which is equal to the index.
 * 
 * Input: arr[] = [-10, -5, 3, 4, 7, 9]
 * Output: -1  
 * Explanation: No Fixed Point
 */
var findFixedPoint = function(arr) {
  // 找出i === element的 element，若沒有回傳-1

  //  O(n) Time , O(1) Space
  for(let i =0;i < arr.length;i++) {
    if(i === arr[i]){
      return arr[i];
    }
  }
  return -1;
}
// let arr = [-10, -5, 0, 3, 7];
// 3
// console.log(findFixedPoint(arr));

/**
 * K most frequent words from a file
 * 
 * 顯示出各單字出現的次數，找出符合k的
 */
var kFreq = function(text,k) {
  let obj = {};
  let split = text.split(" ");
  let ans = "";
  for(let i =0;i < split.length;i++) {
    obj[split[i]] = (obj[split[i]] || 0) + 1;
  }
  for(const [key,value] of Object.entries(obj)) {
    if(value >= k){
      ans += key;
    }
  }
  return ans;
}
// const text = 'Welcome to the world of Geeks Geeks for Geeks is great';
// const k = 3;
// console.log(kFreq(text,k));

/**
 * K closest elements
 * 
 * Given a sorted array arr[] of unique elements and a value x, find the k closest elements to x in arr[]. 
 * Note that if the element is present in array, then it should not be in output, only the other closest elements are required.
 * 
 * Examples: 
 * Input: k = 4, x = 35, arr[] = [12, 16, 22, 30, 35, 39, 42, 45, 48, 50, 53, 55, 56]
 * Output: 39 30 42 45
 * 
 * Input: k = 2, x = 4, arr[] = {1, 3, 4, 10, 12}
 * Output: 3 1
 * 
 * Hints:
 * An element a is closer to x than b if:
 * |a - x| < |b - x|, or
 * |a - x| == |b - x| and a > b (i.e., prefer the larger element if tied)
 * 
 * 找出最接近x值的k個元素，若x也在陣列中，不要讓它出現
 * 
 * @param {number} k 
 * @param {number} x 
 * @param {number[]} arr 
 * @returns {number[]}
 */
var kClosetEle = function(k,x,arr){
  // (arr[i] - x) < (arr[i + 1] - x ) or (arr[i] - x) === (arr[i+1] - x) && arr[i] > arr[i + 1]
  let res = [];
  arr.sort((a,b) =>{
    let diffA = Math.abs(a - x);
    let diffB = Math.abs(b - x);
    // prefer larger element
    if (diffA === diffB){
      return b - a;
    } 
    return diffA - diffB;
  })
  for(let i = 0;i < arr.length;i++) {
    if((Math.abs(arr[i] - x)) < Math.abs((arr[i + 1] - x)) && arr[i] !== x){
      res.push(arr[i]);
    }
    if(res.length === k){
      break;
    }
  }
  return res;
}

// let k = 4, x = 35, arr = [12, 16, 22, 30, 35, 39, 42, 45, 48, 50, 53, 55, 56];
// [39,30,42,45]
// console.log(kClosetEle(k,x,arr));