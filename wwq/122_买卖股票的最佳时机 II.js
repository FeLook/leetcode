var maxProfit = function(prices) {
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      max += prices[i] - prices[i - 1];
    }
  }
  return max;
};
maxProfit([7, 1, 5, 3, 6, 4]);

// 每天都交易，只要有得赚，就得到最大收益，相当于从开头到结尾的最大收益
