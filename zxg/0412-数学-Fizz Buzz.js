/****
 * 
  写一个程序，输出从 1 到 n 数字的字符串表示。

  1. 如果 n 是3的倍数，输出“Fizz”；

  2. 如果 n 是5的倍数，输出“Buzz”；

  3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。

 */

/**
* @param {number} n
* @return {string[]}
*/
var fizzBuzz = function (n) {
  let i = 1,
    arr = [];
  while (n - i > -1) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(String(i))
    }
    ++i;
  };
  return arr;
};

console.log('result', fizzBuzz(15));