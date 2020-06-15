/****
 * 
 * 给定一个整数 n，返回 n! 结果尾数中零的数量。
 * 示例 1:
 * 输入: 3
 * 输出: 0
 * 解释: 3! = 6, 尾数中没有零。
 * 示例 2:
 * 输入: 5
 * 输出: 1
 * 解释: 5! = 120, 尾数中有 1 个零.
 * 
 * 说明: 你算法的时间复杂度应为 O(log n) 。
 */

 /**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let count = 0;
    while (n > 0) {
      count += Math.floor(n / 5);
      n = n / 5;
    }
    return Math.floor(count);
};

console.log(trailingZeroes(3))
console.log(trailingZeroes(4))
console.log(trailingZeroes(5))
/**
 * 解题思路：3！ == 3 * 2 * 1
 * 5! == 5 * 4 * 3 * 2 * 1
 * 
 * 2 * 5 = 10  输出 1
 * 
 * 如果找到该数字下存在多少个 5 就可以，有多少个 5 就有多少 0
 */
