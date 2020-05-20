/** 
  输入: "42"
  输出: 42
  示例 2:

  输入: "   -42"
  输出: -42
  解释: 第一个非空白字符为 '-', 它是一个负号。
       我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。
  示例 3:

  输入: "4193 with words"
  输出: 4193
  解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。
 * 
 */


var myAtoi = function(str) {
  // match 若不带g，第一次全匹配，第二次匹配表达式`()`的值
  str = str.trim().match(/^(\+|-)?\d+/g);
  return str
    ? Math.max(Math.min(Number(str[0]), Math.pow(2, 31) - 1), -Math.pow(2, 31))
    : 0;
};
