/**
 * 9. Palindrome Number
 * 
 * 檢查x是否是迴文（倒著念也一樣）
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 數值不適合顛倒，轉字串
    let toStr = x.toString().split("").reverse();
    // console.log(toStr.join(""))
    
    return x.toString() === toStr.join("");
};
let x = -121;
// false
console.log(isPalindrome(x))