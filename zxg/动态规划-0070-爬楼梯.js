/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-03-26 01:01:15
 * @LastEditTime: 2021-05-11 15:40:05
 */
/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？ **注意：**给定 n 是一个正整数。
 * 
 * 输入： 2   输出： 2 
 * 
 * 
 * 
 * 输入： 3   输出： 3
 * 
  1.  1 阶 + 1 阶 + 1 阶
  2.  1 阶 + 2 阶
  3.  2 阶 + 1 阶

  上 1 阶台阶：有1种方式。

  上 2 阶台阶：有1+1和2两种方式。

  上 3 阶台阶：到达第3阶的方法总数就是到第1阶和第2阶的方法数之和。

  上 n 阶台阶，到达第n阶的方法总数就是到第 (n-1) 阶和第 (n-2) 阶的方法数之和。
 * 
 */

/**
 * 动态规划
 * 
 * @param {} n 
 * @returns 
 */
const climbStairs1 = function (n) { 
  var arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}
console.log('x', climbStairs1(10))


/**
 * 递归
 */
const climbStairs2 = (function () {
  let arr = [0, 1, 2]
  let mid = function (n) {
    if (arr[n]) return arr[n]
    arr[n] = mid(n - 1) + mid(n - 2)
    return arr[n]
  }
  return mid
})()

console.log('x', climbStairs2(10))