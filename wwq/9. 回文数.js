var isPalindrome = function(x) {
  // return String(x).split('').reverse().join('') === String(x)
  x = String(x);
  let start = 0,
    end = x.length - 1; // 前后比较是否相等
  while (start < end) {
    if (x[start] !== x[end]) {
      return false;
    }
    start++; //前进一
    end--; //后退一，收拢
  }
  return true;
};
