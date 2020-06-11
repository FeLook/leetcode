/****
 * 
  给定一个整数 n，返回 n! 结果尾数中零的数量。

  示例 1:
    输入: 3
    输出: 0
    解释: 3! = 6, 尾数中没有零。

  示例 2:

    输入: 5
    输出: 1
    解释: 5! = 120, 尾数中有 1 个零.

    说明: 你算法的时间复杂度应为 O(log n) 。
 */

 /**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let multi = 1;
  while(n > 0) {
    multi *= n;
    n--;
  };
  let s = 0;
  console.log('multi', multi);
  // multi.toString().replace(/0+$/g, item => { s = item.length });
  multi.toString().replace(/(0)\1*$/g, item => { s = item.length });
  return s;
};

console.log('y', trailingZeroes(5));
console.log('y', trailingZeroes(30));



const trailingZeroes = function(n) {
  let count = 0;
  for(let i = 1; i <= n; i++) {
    let num = i;
    if (num % 5 === 0) {
      while(num % 5===0 && num !== 0) {
       count += 1;
       num = parseInt(num / 5);
      }
    }
  }
  return count;
}