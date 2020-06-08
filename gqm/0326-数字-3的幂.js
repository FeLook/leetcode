/** 
 * 给定一个整数，写一个函数来判断它是否是 3 的幂次方
 * 
 * 输入: 27
 * 输出: true
 * 
*/

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
  let str = n.toString(3);
  if (str[0] === '1' && str.slice(1) == false) return true
  else return false
};

console.log(isPowerOfThree(27))