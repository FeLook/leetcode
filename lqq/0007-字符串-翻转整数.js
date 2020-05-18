/**
 * @param {number} x
 * @return {number}
 */

const reverse = function(x) {
  let result = 0;
  if(x < 0) {
    let flag = `${String(x).substring(0, 1)}`;
    // 数字 --> 字符串 --> 数组 --> 数组元素相加
    let num = String(x).substring(1).split('').reverse().reduce((ac, cu) => ac + cu, '');
    result = Number.parseInt(flag + num)
  } else {
    result = Number.parseInt(String(x).split('').reverse().reduce((ac, cu) => ac + cu, ''));
  }
   
  if(result + 1 >  Math.pow(2, 31) || result < -Math.pow(2, 31)) {
    result = 0;
  }
  return result;
};

// 这里用Number.parseInt() 1是字符串转整数，二是可以去除首位的0