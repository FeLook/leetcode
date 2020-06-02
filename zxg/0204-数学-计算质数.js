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
* @param {number} n
* @return {number}
*/

// Error 需要重写
var countPrimes = function (n) {
  let s = 0;
  let sesult = [];
  for (let i = 2; i < n; i++) {
    let flag = false;
    if ([2, 3, 5, 7].indexOf(i) > -1 || (i > 10 && (i % 2 && i % 3 && i % 5 && i % 7))) {
      flag = true;
      ++s;
    };
    if (flag) {
      sesult.push(i);
    }
  };
  return s;
};

console.log('result', countPrimes(10));
console.log('result', countPrimes(15));