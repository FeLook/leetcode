/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-03-16 22:40:02
 * @LastEditTime: 2021-06-30 00:05:27
 */
/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 
 * 
 * 输入: [7,1,5,3,6,4]  1,5 + 3,6 = 4 + 3 = 7
   输出: 7
 * 
 */
/**
 * 可多次交易
 * 
 * @param {*} prices 
 * @returns 
 */
const maxProfit1 = (prices) => {
  let sum = 0;
  if (prices.length < 2) return sum;
  let queue = [] // [min, max]
  for (let i = 0; i < prices.length; i++) {
    if (!queue.length) {
      queue.push(prices[i])
    } else {
      // 递增
      if (prices[i] > queue[queue.length - 1]) {
        queue[1] = prices[i]
      } else {
        if (queue.length === 2) {
          sum = sum + queue[1] - queue[0]
          queue = [prices[i]]
        } else {
          queue[0] = prices[i]
        }
      }
    }
  }
  if (queue.length === 2) {
    sum = sum + queue[1] - queue[0]
  }
  return sum
}

console.log('profit', maxProfit1([7, 1, 5, 3, 6, 4]))

// [7,1,5,3,6,4]  1,5 + 3,6 = 4 + 3 = 7
/***
 * 可多次交易
 * 
 */
const maxProfit2 = (prices) => {
  let sum = 0;
  if (prices.length < 2) return sum;
  let queue = [prices[0]] // [min, max]
  for (let i = 1; i < prices.length; i++) {
    if (queue.length === 2) {
      if (prices[i] > queue[1]) {
        queue[1] = prices[i]
      } else {
        sum = sum + queue[1] - queue[0]
        queue = [prices[i]]
      }
    } else {
      if (prices[i] < queue[0]) {
        queue[0] = prices[i]
      } else {
        queue.push(prices[i])
      }
    }
  }
  if (queue.length === 2) {
    sum = sum + queue[1] - queue[0]
  }
  return sum
}
console.log('profit', maxProfit2([7, 1, 5, 3, 6, 4]))


// 一次交易 动态规划
/**
 * @param {number[]} prices
 * @return {number}
 */
 function maxProfit(prices) {
  let maxProfit = 0; // 最大收益
  let dp = [0]; // 每日最大收益存入数组，第一天初始化为 0

  for (i = 1; i < prices.length; i++) {
    // 计算每日可获取的最大收益值
    dp[i] = Math.max(0, dp[i - 1] + (prices[i] - prices[i - 1]));
    if (dp[i] > maxProfit) { // 比较该日最大收益与已获取最大收益
      maxProfit = dp[i];
    }
  }

  return maxProfit;
};

console.log('profit', maxProfit3([7, 1, 5, 3, 6, 4]))

// 单次
function maxProfit4(prices) {
  let maxProfit = 0
  if (prices.length < 2) return maxProfit
  let min = prices[0]
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min
    }
  }
  return maxProfit
}

console.log('profit', maxProfit4([7, 1, 5, 3, 6, 4]))
