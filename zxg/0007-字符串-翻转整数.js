/** 
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * https://101.zoo.team/zi-fu-chuan/zi-fu-chuan-part-1-fan-zhuan-zheng-shu-you-xiao-de-zi-mu-yi-wei-ci-he-fan-zhuan-zheng-shu#fan-zhuan-zheng-shu
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 。请根据这个假设，如果反转后整数溢出那么就返回 0。
 * 
 * 示例 1:
    输入: 123
    输出: 321

    示例 2:
    输入: -123
    输出: -321

    示例 3:
    输入: 120
    输出: 21
 * 
 */

/**
 * 反转数字
 * 判断首位符号位，数字位split reverse join。
 *
 * @param {number} num
 * @returns {result} result 
 */
const reverse = (num) => {
  if (typeof num !== 'number') { return };

  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);

  let numArr = num.toString().split('');
  const first = isNaN(+numArr[0]) ? numArr.shift() : '';
  let result = + (first + numArr.reverse().join(''));

  return result > max || result < min ? 0 : result;
};


console.log('123', reverse(123));
console.log('-123', reverse(-123));
console.log('120', reverse(120));
console.log('0', reverse(0));



const reverse2 = (num) => {
  if (typeof num !== 'number') { return };

  const max = Math.pow(2, 31) - 1;
  const min = -Math.pow(2, 31);

  let abs = Math.abs(num);
  let res = 0;
  while(abs) {
    // 尾巴变头依次递增
    res = (abs % 10) + res * 10;
    abs = Math.floor(abs / 10);
  }
  if (num >= max || num <= min) {
    return 0;
  }

  return num < 0 ? -res : res;

};


console.log('123', reverse2(123));
console.log('-123', reverse2(-123));
console.log('120', reverse2(120));
console.log('0', reverse2(0));



var arr = [1, 2, 3, 4];

// var



