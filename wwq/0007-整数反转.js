var reverse = function(x) {
  // let flag = x > 0 ? 1 : -1;
  // let value = +((''+(flag*x)).split('').reverse().join(''))
  // return Math.abs(value) >= 2**31 ? 0 : value*flag
  let flag = x > 0 ? 1 : -1;
  let value = Math.abs(x);
  let w = 0;
  while (value > 0) {
    w =
      w * 10 /* 之前末尾数乘10相当于，流出空间跟后面取位数相加 */ +
      (value % 10) /* 取末尾数 */;
    value = Math.floor(value / 10); //裁切掉最后一位
  }
  return w >= 2 ** 31 - 1 || w <= -(2 ** 31) ? 0 : w * flag;
};
