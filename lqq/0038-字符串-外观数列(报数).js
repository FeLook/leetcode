/* 「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 被读作  "one 1"  ("一个一") , 即 11。
11 被读作 "two 1s" ("两个一"）, 即 21。
21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。

给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项。

注意：整数序列中的每一项将表示为一个字符串。 */

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
  if(n===1){
    return '1';
  }
  const preResult = countAndSay(n - 1); // 获取第 n-1 项的结果。
  return preResult.replace(/(\d)\1*/g,  item => `${item.length}${item[0]}`);
};

// 想到了递归，也想到了分组匹配，但不会写正则，所以去pdf上看了正则，一开始看不懂\1的意思，
// 现在懂了/(\d)\1/ 是匹配一组相同的某个数字。