/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-03-16 22:40:02
 * @LastEditTime: 2021-03-17 00:20:08
 */
/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 
 * 
 * 输入: [7,1,5,3,6,4]
   输出: 7
 * 
 */
   const maxProfit = (prices) => {
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
          if(queue.length === 2) {
            sum =  sum + queue[1] - queue[0]
            queue = [prices[i]]
          } else {
            queue[0] =  prices[i]
          }
        }
      }
    }
    if(queue.length === 2) {
      sum =  sum + queue[1] - queue[0]
    }
    return sum
   }

   console.log('profit', maxProfit([7,1,5,3,6,4]))