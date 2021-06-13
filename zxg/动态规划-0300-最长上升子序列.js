/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-05-11 16:29:01
 * @LastEditTime: 2021-05-21 10:28:03
 */

/**
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * 
 * 输入: [10,9,2,5,3,7,101,18]
 * 输出: 4 
 * 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
 * 
 * 
 * 从dp[i] = 1, 
 * nums[i] > nums[j]) 
 *   dp[i] = Math.max(dp[j]+1, dp[i]) 
 *   都和当前i不比，若比i小 就是当前dp[j]+1 和 dp[i]取最大值，
 * 然后 result = Math.max(result, dp[i] )
 * 
 */
//    5 9 1 3 2 9 
// dp[1 2 1 2 2, 2->2->~
var lengthOfLIS2 = function(nums) {
  if (nums.length < 2) return 1
  let dp = [], result = 1;
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j]+1, dp[i])
      }
    }
    console.log('dp', dp)
    result = Math.max(result, dp[i] )
  }
  return result;

}
// 3 
console.log(lengthOfLIS2([5,9,1,3, 2,9]))


