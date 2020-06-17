/***
 * 
 * 
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 * 
  示例 1:

  输入: 2.00000, 10
  输出: 1024.00000

  示例 2:

  输入: 2.10000, 3
  输出: 9.26100

  示例 3:

  输入: 2.00000, -2
  输出: 0.25000
  解释: 2-2 = 1/22 = 1/4 = 0.25
 * 
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = (function () {
  let memo = {};
  md = function (x, n) {
    switch (n) {
      case 1:
        return x;
      case 0:
        return 1;
      case -1:
        return 1 / x;
    };


    const base = n > 0 ? x : 1 / x, // 底数
      nFloor = Math.floor(n / 2),
      nCeil = Math.ceil(n / 2);
    return (memo[nFloor] || (memo[nFloor] = md(base, nFloor))) * (memo[nCeil] || (memo[nCeil] = md(base, nCeil)));
  };
  return md;
})();

console.log('result', myPow(2.10000, 3));
console.log('result', myPow(2, -10));