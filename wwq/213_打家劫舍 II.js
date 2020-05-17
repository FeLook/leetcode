var rob = function(nums) {
  let len = nums.length;
  if (len === 0) return 0;
  if (len === 1) return nums[0];
  let states1 = new Array(len).fill(0);
  states1[0] = nums[0];
  states1[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len - 1; i++) {
    states1[i] = Math.max(states1[i - 2] + nums[i], states1[i - 1]);
  }
  let states2 = new Array(len).fill(0);
  states2[0] = 0;
  states2[1] = nums[1];
  for (let i = 2; i < len; i++) {
    states2[i] = Math.max(states2[i - 2] + nums[i], states2[i - 1]);
  }
  return Math.max(states2[len - 1], states1[len - 2]);
};
// 0 - n-1
// 1 - n
// 抢0-n-1和1-n哪个大，要么抢一不抢最后一个，要么抢最后一个不抢第一个
