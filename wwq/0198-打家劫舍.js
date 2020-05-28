var rob = function(nums) {
  let len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return nums[0];
  let states = new Array(len).fill(0);
  states[0] = nums[0];
  states[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++) {
    states[i] = Math.max(states[i - 2] + nums[i], states[i - 1]);
  }
  return states[len - 1];
};
// 动态转移方程 max(dp(i-2)+nums[i],dp(i-1))
// 打家劫舍，先找到边界 ，边界的作用是可以方便后面查询，想i-2，当i为2时可以对应到第0个，其实就是初始化数据填充，一般需要先准备好基础可预测的数据写好
// 然后比较，偷第i个话必然不能偷i-1个，所以推断已经偷了第i-2个，然后比较偷第i-1个大还是 当前偷的加上i-2偷的总和大。然后填充当前能偷的最大的值，供后续判断
