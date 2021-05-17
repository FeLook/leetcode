/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-05-13 23:21:27
 * @LastEditTime: 2021-05-14 01:54:43
 */
/**
 * 
 * 
给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符


eg.1

输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')

输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')


 注意i,j不相等

 lovet->删除一位
 love
 lov->添加一位
 love
 lovi->替换
 love
  解题思路
 * 0072 编辑距离word1->word2,可通过插df[i][j-1]删df[i-1][j]修df[i-1][j-1]三种操作。
   1. 定义： dp[i][j] word1前i字符转化为word2前j字符所需最少操作个数
   2. 关系：相等 ~ dp[i][j] ？ = 左上角 ： 左三角最小 +1.
   3. 初始值 ： 初行 0 -> i , 初列 0 -> j 

 */

var minDistance = function(word1, word2) {
  let len1 = word1.length, len2 = word2.length;
  let dp = []
  // 初始化dp
  for (let i = 0; i <= len1; i++) {
    dp[i] = [];
    for (let j = 0; j <= len2; j++) {
      dp[i][j] = 0;
      if (i === 0) {
        dp[i][j] = j
      }
      if (j === 0) {
        dp[i][j] = i
      }
    }
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1[i -1] === word2[j-1]) {
         dp[i][j]=dp[i-1][j-1]
      } else {
        dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]) + 1;
      }
    }
  }

  console.log('x', dp)

  return dp[len1][len2]
};


console.log('x', minDistance('dabc', 'abc'))
console.log('x', minDistance('abc', 'dabc'))
console.log('x', minDistance('abce', 'abcf'))