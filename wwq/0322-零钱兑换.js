var coinChange = function(coins, amount) {
  let dep = new Array(amount + 1).fill(Infinity);
  dep[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dep[i] = Math.min(dep[i - coin] + 1, dep[i]);
      }
    }
  }
  console.log(dep);
  return dep[amount] === Infinity ? -1 : dep[amount];
};
coinChange([1, 3, 5], 9);
// 解析：兑换9，那么可以算 9-5=4 兑换4枚最少需要多少枚，兑换9-3=6兑换4枚最少需要多少枚，兑换9-1=8兑换8枚最少需要多少枚
// dep[i - coin]是前一枚需要的枚数， +1 其实就是从 1 3 5 中都可能是其中一个，比较哪个最小，就是当前需要的枚数
