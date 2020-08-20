/**
 * 求 n 以内的所有素数，并说明时间复杂度
 */

function isPrime(num) {
  if (num === 2 || num === 3) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  let divisor = 3,
    limit = Math.sqrt(num);
  while (limit >= divisor) {
    if (num % divisor === 0) {
      return false;
    } else {
      divisor += 2;
    }
  }
  return true;
}

const getNums = (n) => {
  // 素数的定义：除去自己和1不可以被其他数字整除
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if(isPrime(n - i)) {
      arr.push(n - i)
    }
  }
  return arr;
};

console.log(getNums(10));
console.log(getNums(40));
console.log(getNums(70));
