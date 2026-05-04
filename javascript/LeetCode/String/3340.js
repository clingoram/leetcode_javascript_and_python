/**
 * 3340. Check Balanced String
 * 
 * 參數為字串數字，檢查index 偶數和基數各自相加後是否相等。
 * 
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    // solution 
    // TC:O(N)
    let oddSum = 0, evenSum = 0;
    for(let i = 0;i < num.length;++i) {
        if(i % 2 === 0){
            evenSum += parseInt(num[i]);
        }else{
            oddSum += parseInt(num[i]);
        }
    }
    return evenSum === oddSum;
};
let num = "1234";
console.log(isBalanced(num));