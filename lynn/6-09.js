/**
 * @param {number} n
 * @return {number}
 */
// 最开始隐隐约约觉得依据5的倍数，但还是写了一个算阶乘的方法
var trailingZeroes = function(n) {
  let sum = 1;
  let i = 1;
  let zeroNum = 0;
  if(n < 5) {return 0}
  while(i<=n) {
    if(i === n) {
      sum = sum * n
    } else {
      sum = sum * i * n
    }
    i++;
    n--;
  }
};

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  var zero=0
  while(n>=5){
      zero+=Math.floor(n/5)
      n/=5
}
return zero
};