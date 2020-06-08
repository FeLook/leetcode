/*****
 * 
    给定一个整数，写一个函数来判断它是否是 3 的幂次方。

    示例 1:

    输入: 27
    输出: true
 */

 /**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfThree = function(n) {
  while(n > 2) {
    n = n / 3;
    if(!Number.isInteger(n)) {
      return false;
    }
  }
  if(n === 1) {
    return true;
  } else {
    return false;
  }
};



console.log('result', isPowerOfThree(100));
console.log('result', isPowerOfThree(27));
console.log('result', isPowerOfThree(0));
console.log('result', isPowerOfThree(4));

