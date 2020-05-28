/**
 * 
  给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

  说明：本题中，我们将空字符串定义为有效的回文串。

  示例 1:

  输入: "A man, a plan, a canal: Panama"
  输出: true
  示例 2:

  输入: "race a car"
  输出: false
*/


/**
 * @param {string} str
 * @return {boolean}
 */
const isPalindrome = function(str) {
  if (!str) return true;
  // ^在头表示以什么开始 ^在[]中表示非。
  str = str.toLowerCase().replace(/[^a-z0-9]/ig, ''); 
  // 也可用二分法处理
  return str === str.split('').reverse('').join('');
};


console.log('result', isPalindrome('A man, a plan, a canal: Panama'));
console.log('result', isPalindrome('race a car'));