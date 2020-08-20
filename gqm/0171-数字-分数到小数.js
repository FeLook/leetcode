/******
 * 
 * 
  给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以字符串形式返回小数。

  如果小数部分为循环小数，则将循环的部分括在括号内。

  示例 1:

  输入: numerator = 1, denominator = 2
  输出: "0.5"
  示例 2:

  输入: numerator = 2, denominator = 1
  输出: "2"
  示例 3:

  输入: numerator = 2, denominator = 3
  输出: "0.(6)"
 */

const fractionToDecimal = (numerator, denominator) => {
  if (!numerator) return "0";
  var fraction = [],
    remain = 0,
    map = new Map();
  if ((numerator < 0) ^ (denominator < 0)) {
    fraction.push("-");
  }
  num = Math.abs(numerator);
  deno = Math.abs(denominator);
  //整数部分
  fraction.push(Math.floor(num / deno).toString());
  remain = num % deno;
  if (remain) {
    fraction.push(".");
  }
  while (remain) {
    //存在重复余数则必出现循环
    if (map.has(remain)) {
      //插入左括号
      fraction.splice(map.get(remain), 0, "(");
      fraction.push(")");
      break;
    }
    map.set(remain, fraction.length);
    remain *= 10;
    fraction.push(Math.floor(remain / deno).toString());
    remain %= deno;
  }
  return fraction.join("");
};
