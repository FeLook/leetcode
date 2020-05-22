/****
 * 
「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：
  1.     1   
  2.     11 即一个一11
  3.     21 即两个1 21
  4.     1211 即一个1一个2一个1：1211
  5.     111221 一个1一个2，两个1（两个1是连续的，因此就是两个1）111221
  6.     312211 三个1，两个2，一个1 即 312211

  给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项。

  注意：整数序列中的每一项将表示为一个字符串。

 */


/**
  * @param {number} n
  * @return {string}
  */
var countAndSay = (function () {
  let s = 1;
  let memo = {
    [s]: '1'
  };

  let mid = function (n) {
    while (!memo[n]) {
      // 正则 \1 多个相同字符
      memo[s+1] = memo[s].replace(/(\d)\1*/g, item => `${item.length}${item[0]}`);
      s++;
    }
    return memo[n];
  }
  return mid;
}());


console.log('result', countAndSay(5));
console.log('result', countAndSay(4));
// console.log('result', countAndSay(2));
// console.log('result', countAndSay(1));

