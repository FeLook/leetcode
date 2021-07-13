/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-05-18 15:05:23
 * @LastEditTime: 2021-07-13 23:58:07
 * 
 * 
 * 
 * 
 * 最长回文子序列
 * 
 * "bbbab" 4 
 * 一个可能的最长回文子序列为 "bbbb"。
 * 
 * 
 * "cbbd" 2
 * 一个可能的最长回文子序列为 "bb"。
 * 
 * b b b a b
 * 1 0 0 0 0
 * 0 1 0 0 0
 * 0 0 1 0 0
 * 0 0 0 1 0
 * 0 0 0 0 1   向上 向右->找到右上角
 */
var longestPalindromeSubseq = function(str) {
  if(str.length < 2) return str.length
  let dp = []
  let len  = str.length
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(0)
    for (let j = 0; j < len; j++) {
      if (i === j) {
        dp[i][j] = 1;
      }
    }
  }

  for (let i = len - 1; i > -1; i--) {
    for (let j = i + 1; j < len; j++) {
      if (str[i] === str[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[0][len-1]
};