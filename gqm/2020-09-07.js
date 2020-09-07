/**
 * 给定一个由整数组成的非空数组，在该数的基础上加一
 */

const addNum = (arr) => {
  if (!arr.length) return 0;
  if (arr[0] <= 0) return 0;
  // 有数字长度限制
  let num = BigInt(+arr.join(''))
  return (JSON.stringify((num + 1n) + '').split('')).filter(item => item !== '"')
};


console.log(addNum([1,2,3,4]))

console.log(addNum([1,9,9,9]))
