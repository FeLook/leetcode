/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-03-29 14:36:32
 * @LastEditTime: 2021-07-12 00:41:21
 */

/**
 * 
 * 一次交易
 * 
 * @param {number[]} prices
 * @return {number}
 */
 function maxProfit(prices) {
  let maxProfit = 0; // 最大收益
  let profits = [0]; // 每日最大收益存入数组，第一天初始化为 0

  for (i = 1; i < prices.length; i++) {
    // 计算每日可获取的最大收益值
    profits[i] = Math.max(0, profits[i - 1] + (prices[i] - prices[i - 1]));
    if (profits[i] > maxProfit) { // 比较该日最大收益与已获取最大收益
      maxProfit = profits[i];
    }
  }

  return maxProfit;
};

console.log('profit', maxProfit([7, 1, 5, 3, 6, 4]))


// 一次交易
function maxProfit(arr) {
  let result = 0;
  let min = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    } else {
      result = Math.max(result, arr[i] - min)
    }
  }
  return result
}

// 多次交易 递增时一直累加
function maxProfit(arr) {
  let reslut = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i -1] > 0) {
      reslut = reslut + arr[i] - arr[i -1]
    }
  }
  return reslut
}
