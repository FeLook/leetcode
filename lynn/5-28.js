
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。
// 此时最先想到的，是把第一个作为标准，去根据第一个的每一项去遍历整个数组
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const str =(strs[0] || '').split('');
  const length = str.length;
  let commonStr = '';
  for(var i = 0 ; i< length; i++) {
    if( strs.every((item) => item.charAt(i) === str[i])) {
      commonStr+= str[i]
    }else {
      break
    }
  }
  return commonStr
};