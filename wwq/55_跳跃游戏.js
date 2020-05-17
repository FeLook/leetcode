var canJump = function(nums) {
  if (nums.length === 1) return true;
  let flag = false;
  let obj = {};
  function f(n, value) {
    console.log(n, value);
    if (obj[`${n}-${value}`]) return;
    obj[`${n}-${value}`] = true;
    if (n === nums.length - 1 || (value === 0 && n === nums.length - 1)) {
      flag = true;
      return;
    }
    if (value === 0) {
      return;
    }
    for (let i = 1; i <= value; i++) {
      f(n + i, nums[n + i]);
    }
  }
  f(0, nums[0]);
  return flag;
};
// canJump([2, 3, 1, 1, 4]); // 超出时间限制
var canJump = function(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > max) return false;
    max = Math.max(max, i + nums[i]); // i + nums[i]是当前已走 i 加上目前可以走的步数 nums[i]
  }
  return true;
};
canJump([2, 3, 1, 1, 4]); // 超出时间限制
// 判断走了多少
