/*****
 * 
  统计所有小于非负整数 n 的质数的数量。

  示例:

  输入: 10
  输出: 4
  解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 */

/**
* @param {number} num
* @return {number}
*/

const countPrimes = (num: number): number => {
  let arr = [], count = 0
  for (let i = 0; i < num + 1; i++) {
    arr[i] = true // 标记初始化
  }
  for (let i = 2;i < num;i++) {
    if (arr[i]) { // 如果i是质数
      for (let j = i + i;j < num;j = j + i) {
        arr[j] = false // i的n倍数肯定不是质数
      }
      count++
    }
  }
  return count
};

console.log(countPrimes(10));
console.log(countPrimes(15));