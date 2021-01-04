/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2020-06-03 00:31:13
 * @LastEditTime: 2021-01-04 18:31:45
 */
/*
  给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

  示例 1：

  输入: "babad"
  输出: "bab"
  注意: "aba" 也是一个有效答案。
  示例 2：

  输入: "cbbd"
  输出: "bb"
*/

/**
 * @param {string} str
 * @return {string}
 */
var longestPalindrome = function(str) {
  if (typeof str !== 'string') return
  let arr = []
  for (let index = 0; index < str.length; index++) {
    const singStr = str.charAt(index)
    if (arr.includes(singStr)) {
      return str.substring(arr.indexOf(singStr), index + 1)
    } else {
      arr.push(singStr)
    }
  }
};