/****
 *
  编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。

  如果 n 是快乐数就返回 True ；不是，则返回 False

  输入：19
  输出：true
  解释：
  12 + 92 = 82
  82 + 22 = 68
  62 + 82 = 100
  12 + 02 + 02 = 1
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // 死循环存储
  var obj = {};
  while (n !== 1) {
    n = n.toString();
    let result = 0;
    for (let i = 0; i < n.length; i++) {
      result += Math.pow(n[i], 2);
    }
    n = result;
    if (!obj[n]) {
      obj[n] = 1;
    } else {
      return false;
    }
    if (result === 1) return true;
  }
  return true;
};


console.log('result', isHappy(19));


var isHappy = (function () {
  var arr = [];
  function fn (n) {
    let s = n.toString();
    let res = 0;
    arr.push(s);

    s.split('').forEach(function(val) {
      res+= Math.pow(val,2);
    }, 0);
    
    if (res === 1) {
      return true;
    } else if (arr.includes(res.toString())) {
      return false;
    } else {
      return fn(res);
    }
  }
  return fn;
})();


console.log('xx', isHappy(19));
console.log('yy', isHappy(3));