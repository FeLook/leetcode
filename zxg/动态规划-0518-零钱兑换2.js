/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-05-16 23:00:25
 * @LastEditTime: 2021-05-18 11:23:00
 */
/**
 * 
 * amount = 5, coins = [1, 2, 5]
 * 
  输入: amount = 5, coins = [1, 2, 5]
  输出: 4
  解释: 有四种方式可以凑成总金额:
  5=5
5=2+2+1
  5=2+1+1+1
  5=1+1+1+1+1

  输入: amount = 3, coins = [2]
  输出: 0
  解释: 只用面额2的硬币不能凑成总金额3。

  输入: amount = 10, coins = [10] 
  输出: 1
 * 
 */
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let len1 = coins.length
  let dp = []
  // 用前i个币，可以拼成amount 有多少种
  for (let i = 0; i <= len1; i++) {
    dp[i] = []
    for (let j = 0; j <= amount; j++) {
      if (i === 0) {
        dp[i][j] = 0
      }
      if (j === 0) {
        dp[i][j] = 1
      }
      dp[0][0] = 1
    }
  }


  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= amount; j++) {
      dp[i][j] = 0
      for (let k = 0; coins[i - 1] * k <= j; k++) {
        dp[i][j] += dp[i - 1][j - k * coins[i - 1]]
      }
    }
  }
  return dp[len1][amount]
};

console.log('coinChange', coinChange([1, 2, 5], 5))


// dp[i-1][j] + dp[i][]

// dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]]

// dp[i][j] = dp[i-1][j - k *coins[i -1]],  

// 前 i种 , 数额j。
// 0 <= k <= j / coins[i -1]
// dp[3][5] -> 硬币2用了几次

// dp[i-1][j]

// 5， 2 2 1 ， 2 1 1 1 ， 1 1 1 1 1

//   0 1 2 3 4 5
// 0 1 0 0 0 0 0
// 1 1 1 1 1 1 1
// 2 1 1 2 2 3 3
// 5 1 1 2 2 3 4