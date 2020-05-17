// var lengthOfLIS = function(nums) {
//   let max = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     const arr = [num]
//     for (let j = 1; j < nums.length; j++) {
//       const ele = nums[j];
//       if(ele > arr[arr.length-1]){
//         arr.push(ele)
//       }
//     }
//     if(arr.length > max) max = arr.length
//   }
//   return max
// };
// O(n^2)
var lengthOfLIS = function(nums) {
  let len = nums.length;
  let dp = new Array(len).fill(1);
  let res = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      debugger;
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    res = Math.max(dp[i], res);
  }
  return res;
};
lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18, 200]);
// https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/zui-chang-shang-sheng-zi-xu-lie-dong-tai-gui-hua-2/
