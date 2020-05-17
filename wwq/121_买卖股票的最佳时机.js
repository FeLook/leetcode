// var maxProfit = function(prices) {
//   let max = 0;
//   for (let i = 1; i < prices.length; i++) {
//     for (let j = i; j >= 0; j--) {
//       if (prices[i] - prices[j] > max) {
//         max = prices[i] - prices[j];
//       }
//     }
//   }
//   return max;
// };
var maxProfit = function(prices) {
  let max = 0;
  let min = Infinity;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }
  return max;
};
maxProfit([7, 1, 5, 3, 6, 4]);
// 找到最小的那个数，然后跟后续的比较，第一次比最小大的差就是当前最大值，然后后面如果相减还是比当前的数字大，那么就替换
