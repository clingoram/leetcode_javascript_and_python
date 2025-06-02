/**
 * Check the exam
 * 
 * The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
 * The two arrays are not empty and are the same length. 
 * Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
 * 
 * If the score < 0, return 0.
 * For example:
 * checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
 * checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
 * checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
 * checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
 */
function checkExam(array1, array2) {
  /**
   * 給兩個字串陣列參數，檢查這兩個參數中的元素有哪些不一樣，再依據他們的比對結果作加減分
   * 一樣:+4分
   * 不一樣:-1
   * 空:+0
   * ---------
   * 參數長度會相等，可能會有空字串
   * 比對兩個參數元素
   */
  let sum = 0;
  if (array1.length !== array2.length) {
    return;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      sum += 4;
    } else if(array1[i] === "" || array2[i] === "") {
      sum += 0;
    }else{
      sum -= 1;
    }
  }
  return sum < 0 ? 0 : sum;
}
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
// 7