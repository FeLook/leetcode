/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2021-05-18 11:28:16
 * @LastEditTime: 2021-05-18 15:02:47
 */

/**
 * 
 * 
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 
 * s = "abcabcbb"
 * 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * s = "bbbbb"
 * 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * 
 * s = "pwwkew"
 * 
 * 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 

     输入: s = ""
     输出: 0
 */

var lengthOfLongestSubstring = function(s) {
  let dp = new Array(s.length).fill(0)
  dp[0] = 1
  let word = s[0]
  let result = 1
  for (let i = 1; i < s.length; i++) {
    if (word.includes(s[i])) {
      word = s[i]
    } else {
      word += s[i]
    }
    result = Math.max(result, word.length)
    dp[i] = result
  }
  return result
};


console.log('res', lengthOfLongestSubstring('abcabcbb'))
console.log('res', lengthOfLongestSubstring('bbbbb'))
console.log('res', lengthOfLongestSubstring('pwwkew'))
