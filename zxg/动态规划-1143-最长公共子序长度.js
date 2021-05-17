/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-05-12 00:37:43
 * @LastEditTime: 2021-05-14 01:49:27
 */

/**
 * 
 * 参考视频：https://www.bilibili.com/video/BV14A411v7mP/?spm_id_from=333.788.recommend_more_video.1
 * 
 * 
 * 输入：text1 = "abcde", text2 = "ace" 
    输出：3  
    解释：最长公共子序列是 "ace" ，它的长度为 3 。


    输入：text1 = "abc", text2 = "abc"
    输出：3
    解释：最长公共子序列是 "abc" ，它的长度为 3 。

    输入：text1 = "abc", text2 = "def"
    输出：0
    解释：两个字符串没有公共子序列，返回 0 。
 */

var longestCommonSubsequence = function (text1, text2) {
  let len1 = text1.length, len2 = text2.length;
  let dp = []
  for (let i = 0; i <= len1; i++) {
    dp[i] = []
    for (let j = 0; j <= len2; j++) {
      if (i=== 0 || j === 0) {
        dp[i][j] = 0
      }
      
    }
  }
  // console.log('init dp', dp)

    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
      if (text1[i-1] === text2[j-1]) {
        dp[i][j] = dp[i-1][j-1] + 1
      } else {
        dp[i][j] = Math.max( dp[i][j-1], dp[i - 1][j] )
      }
    }
  }
  // console.log('result dp', dp)

  return dp[len1][len2]
}

console.log('->', longestCommonSubsequence('123', '12'))
console.log('->', longestCommonSubsequence('12345', '1'))
console.log('->', longestCommonSubsequence('3232', '2356'))


var longestCommonSubsequence1 = function (text1, text2) {
  // +1 是为了减少边界判断
  const ln1 = text1.split(''); ln1.unshift('')
  const ln2 = text2.split(''); ln2.unshift('')
  const len1 = ln1.length
  const len2 = ln2.length
  let dp = []
  for (let i = 0; i < ln2.length; i++) {
    dp[i] = []
      for (let j = 0; j < ln1.length; j++) {
        dp[i][j] = 0
      }
  }
  // console.log('init dp', dp)

  for (let y = 1; y < len2; y++) {
    for (let x = 1; x < len1; x++) {
      if (ln1[y] === ln2[x]) {
        dp[y][x] = dp[y-1][x-1] + 1
      } else {
        dp[y][x] = Math.max(dp[y-1][x], dp[y][x-1])
      }
    }
  }
  // console.log('result dp', dp)

  return dp[text2.length][text1.length]

};

console.log('->', longestCommonSubsequence1('123', '12'))
console.log('->', longestCommonSubsequence1('12345', '1'))
console.log('->', longestCommonSubsequence1('3232', '2356'))