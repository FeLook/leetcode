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
const countAndSay = function (n) {
  if (n == 1) {
    return "1";
  }
  var str = "1";
  var sum = "";
  for (var i = 1; i < n; i++) {
    var sum = "";
    for (var j = 0; j < str.length; j++) {
      var num = 1;
      for (var k = j; k < str.length; k++) {
        if (str[k + 1] && str[k + 1] == str[j]) {
          num += 1;
        } else {
          break;
        }
      }
      if (num) {
        sum += `${num}${str[j]}`;
        j += num - 1;
      } else {
        sum += `1${str[j]}`;
      }
    }
    str = sum;
  }
  return str
};

console.log(countAndSay(4))