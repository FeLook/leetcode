// 输入: [-2,1,-3,4,-1,2,1,-5,4],
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
var maxSubArray = function(nums) {
  const len = nums.length;
  if (len === 1) return nums[0];
  let states = new Array(len);
  states[0] = nums[0];
  let max = nums[0];
  for (let i = 1; i < len; i++) {
    const pre = states[i - 1];
    states[i] =
      (nums[i] > pre && pre >= 0) || nums[i] < pre ? pre + nums[i] : nums[i];
    // ? nums[i]
    // : pre + nums[i];
    if (states[i] > max) {
      max = states[i];
    }
  }
  console.log(states);
  return max;
};
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1, 2]));
// 题解：动态规划，先定义第一个，第一个肯定刚开始最大，然后找第二个，如果后面的大于前一个，就需要单独判断是否是递增的，因为可能越加越少
// 判断大于前一个之后，判断前一个是否大于0，保证相加的时候是递增的，然后相加，或者当前小于前一个自然也需要相加，不相加的话，目前就比之前的小了，求的最大值
// 否则，如果大于前一个并且小于0的话，那么就不把它相加到当前，states[i] = nums[i];保留当前的值，不然就会越加越少，比如 -2 -1 ，最大肯定是-1，而不是-2+-1
// 上面的结果是  [ -2, 1, -2, 4, 3, 5, 6, 1, 5 ]
