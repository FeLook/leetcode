/*** 
 *  给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 *  说明：本题中，我们将空字符串定义为有效的回文串。
 *  示例 1:
 *  输入: "A man, a plan, a canal: Panama"
 *  输出: true
 *  示例 2:
 *  输入: "race a car"
 *  输出: false 
*/


/**
 * @param {string} str
 * @return {boolean}
 */
const isPalindrome = function(str) {
  str = str.replace(/[^0-9a-zA-Z]/g, "").toLocaleLowerCase();
  let reverse = str
    .split("")
    .reverse()
    .join("");
  return str === reverse;
};

isPalindrome('A man, a plan, a canal: Panama')

isPalindrome("race a car")


/**
 * 此题设为重点，一开始连题都读不懂......
 * 
 * 后来发现原来是倒过来和正过来一样，要了狗命了真的是
 */