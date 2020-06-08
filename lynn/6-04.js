
/**
 * @param {number} n
 * @return {boolean}
 * 3的次方：循环除三可以除尽
 */
var isPowerOfThree = function(n) {
  while(n >= 3){
      n /= 3;
  }
  return n === 3 || n=== 1;
};