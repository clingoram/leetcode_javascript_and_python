/*
219. Contains Duplicate II
Difficulty:Easy

Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

note:
1. num(int array) and int k
2. array 中有i 和 j，要互等於 => nums[i] = nums[j]
3. return true or false


Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    if (!nums) {
        return false;
    }

    let toMap = new Map(); //每組資料都有對應的 key 值與 value 值，所以 Map 在意義上類似於物件。
    //  key 值的範圍不限於字串，可以是各種類型的值（包括 number、array、object、function、symbol...等等）都可以當作 key，是一種更完善的 Hash 結構實現。

    /*
    map():
        set(key, value): 設置內容
        get(key): 獲取指定 key 的內容，若找不到返回undefined
        has(key): 檢查是否存在此 key，有則返回ture，無則返回false
        delete(key): 刪除指定 key 的內容，成功返回ture，失敗返回false
        clear(): 刪除所有內容成員
        size 屬性: 取得內容成員總數

    Map 的迭代方法:
        這些方法函數所產生的內容都是 "迭代器(iterator)的資料類型"，可以使用for...of迴圈取得個別單獨的值，也能使用...擴展運算符直接轉成陣列類型。

        keys(): 取得所有 key
        values(): 取得所有成員的值
        entries(): 取得所有內容成員
        forEach(): 走訪 Map 的所有成員
    */

    // solution 1:
    // for (let i = 0; i < nums.length; i++) {
    //     let current = nums[i];
    //     // console.log(toMap.has(current));

    //     // Math.abs(x) 回傳絕對值
    //     if (toMap.has(current) && Math.abs(toMap.get(current) - i) <= k) {
    //         return true;
    //     } else {
    //         // map.set() 設置資料內容(key,value)
    //         toMap.set(current, i);
    //     }
    // }
    // return false;

    // solution 2:
    for (let i = 0; i < nums.length; i++) {
        if (toMap.has(nums[i]) && i - toMap.get(nums[i]) <= k) {
            return true;
        }
        toMap.set(nums[i], i);
    }
    return false;

    // solution 3.
    // i & j => nums[i] == nums[j] & abs(i - j) <= k.
    // nums[i]跟nums[j]一樣
    // let map = new Map();
    // for(let i = 0;i < nums.length;++i){
    //   if(map.has(nums[i]) && i - map.get(nums[i]) <= k){
    //     return true
    //   }
    //   map.set(nums[i],i);
    // }
    // return false;
};
const nums = [1, 2, 3, 1], k = 3; // return true
//Input: nums = [1,0,1,1], k = 1 return true
//Input: nums = [1,2,3,1,2,3], k = 2 return false

console.log(`The containsNearbyDuplicate result is ${containsNearbyDuplicate(nums, k)}`);