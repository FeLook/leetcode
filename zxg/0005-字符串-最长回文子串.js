/*
 * @Author: xiaoguang_10@qq.com
 * @LastEditors: xiaoguang_10@qq.com
 * @Date: 2020-06-03 00:31:13
 * @LastEditTime: 2021-07-12 02:24:14
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

// 中心扩散法
function longestPalindrome(str) {
  if (str.length < 2) {
    return str
  }
  let res = ''
  for (let i = 0; i < str.length; i++) {
    helper(i, i)
    helper(i, i + 1)
  }
  function helper(l, r) {
    while (l >= 0 && r < str.length && str[l] === str[r]) {
      l--;
      r++;
    }
    if (r - l - 1 > res.length) {
      res = str.substring(l + 1, r)
    }
  }

  return res
}

/**
 * @param {string} str
 * @return {string}
 */ 
 var longestPalindrome = function(s) {
  let n = s.length;
  let result = ''
  for(let i = 0;i<n;i++){
      for(let j=i+1;j<=n;j++){
          let str = s.slice(i,j);
          let f = str.split('').reverse().join('');
          
          if(str == f){
              result = str.length > result.length ? str : result;
          }
      }
  }
  console.log(result);
  
  return result;
};

console.log(longestPalindrome('cbbd')) // bb
console.log(longestPalindrome('babad')) // bab
console.log(longestPalindrome('edeabcba')) // bab

// 建立矩阵 dp
// 循环遍历字符串，取得不同长度的子串
// 不同长度的子串，根据不同的条件进行判断是否为回文子串
// （1）长度为 1，一定回文
// （2）长度为 2 或 3，判断首尾是否相同：s[i] === s[j]
// （3）长度 > 3, 首尾字符相同，且去掉首尾之后的子串仍为回文：(s[i] === s[j]) && dp[i + 1][j - 1]
// 取得长度最长的回文子串


/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome2 = function (s) {
  const dp = [];
  for (let i = 0; i < s.length; i += 1) {
    dp[i] = [];
  }
  let max = -1; let str = '';
  for (let l = 0; l < s.length; l += 1) {
    // l为所遍历的子串长度 - 1，即左下标到右下标的长度
    for (let i = 0; i + l < s.length; i += 1) {
      const j = i + l;
      // i为子串开始的左下标，j为子串开始的右下标
      if (l === 0) {
        // 当子串长度为1时，必定是回文子串
        dp[i][j] = true;
      } else if (l <= 2) {
        // 长度为2或3时，首尾字符相同则是回文子串
        if (s[i] === s[j]) {
          dp[i][j] = true;
        } else {
          dp[i][j] = false;
        }
      } else {
        // 长度大于3时，若首尾字符相同且去掉首尾之后的子串仍为回文，则为回文子串
        if ((s[i] === s[j]) && dp[i + 1][j - 1]) {
          dp[i][j] = true;
        } else {
          dp[i][j] = false;
        }
      }
      if (dp[i][j] && l > max) {
        max = l;
        str = s.substring(i, j + 1);
      }
    }
  }
  return str;
};


console.log(longestPalindrome2('cbbd')) // bb
console.log(longestPalindrome2('babad')) // bab



