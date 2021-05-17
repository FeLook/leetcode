/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-05-11 23:10:19
 * @LastEditTime: 2021-05-17 10:40:37
 */


/**
 * 
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 你可以认为每种硬币的数量是无限的。
 * 
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3 
 * 解释：11 = 5 + 5 + 1
 * 
 * coins = [2], amount = 3
 * -1
 * 
 * coins = [1], amount = 0
 * 0
 * 
 * coins = [1], amount = 1
 * 1
 * 
 * 兑换9，那么可以算 
 * 9-5=4 兑换4枚最少需要多少枚，-> 要求出 4-> 3(4-1)->2(4-2)
 * 兑换9-3=6兑换4枚最少需要多少枚
 * 兑换9-1=8兑换8枚最少需要多少枚
 * 
 * 兑换9 依次求出 0 ~ 9， 每个需要多少枚
 * 
 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
  let dep = new Array(amount + 1).fill(Infinity);
  dep[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dep[i] = Math.min(dep[i - coin] + 1, dep[i]);
        // console.log('i', i, 'dep', dep[i])
      }
    }
  }
  // console.log('dep', dep)
  return dep[amount] === Infinity ? -1 : dep[amount];
};

console.log('coinChange', coinChange([1, 2, 5], 9))
