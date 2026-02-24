/**
 * 3838. Weighted Word Mapping
 * 
 * 0 = z;1 = y;2 = x....;25 = a，26個字母倒著
 * 將每個元素字母重量加總後%26得出的A值，將A值與26個字母倒著的value做比對，取對應的key並以字串回傳
 * 
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    // 可能遇到的狀況：key(字母)、value(數字)重複出現
    let alp = generateAlphabet();
    let sumWeights = [];
    
    for (const element of words) {
      let countLen = 0;
      for(let i = 0;i < element.length;++i) {
        countLen += weights[element.charCodeAt(i) - 'a'.charCodeAt()]
      }
      // modulo 26
        sumWeights.push(countLen % 26);
    }
    // 方法1
    //   const result = sumWeights.map(num => {
    //   const found = [...alp.entries()]
    //     .find(([key, value]) => value === num);
    //   return found ? found[0] : null;
    // });

    // 方法2 反向 Map
    const reverseMap = new Map(
      [...alp.entries()].map(([k, v]) => [v, k])
    );

    const result = sumWeights.map(num => reverseMap.get(num) ?? null);

    return result.join("")


     /**
     * 產生26個英文字母
     * a = 26,b = 25 ....
     * @returns obj
     */
    function generateAlphabet(){
      let start = "a";
      let end = "z";
      let alp = new Map();
      let range = 25;
      let i = start.charCodeAt(0), j = end.charCodeAt(0);
      for (; i <= j; ++i) {
        alp.set(String.fromCharCode(i),range--);
      }
      return alp;
    }
};
let list = ["abcd","def","xyz"], weights = [5,3,12,14,1,2,3,2,10,6,6,9,7,8,7,10,8,9,6,9,9,8,3,7,7,2];
/*
Output: "rij"
Explanation:
The weight of "abcd" is 5 + 3 + 12 + 14 = 34. The result modulo 26 is 34 % 26 = 8, which maps to 'r'.
The weight of "def" is 14 + 1 + 2 = 17. The result modulo 26 is 17 % 26 = 17, which maps to 'i'.
The weight of "xyz" is 7 + 7 + 2 = 16. The result modulo 26 is 16 % 26 = 16, which maps to 'j'.
Thus, the string formed by concatenating the mapped characters is "rij".
*/
console.log(mapWordWeights(list,weights));