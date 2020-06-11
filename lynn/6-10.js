/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * 超时
 */
var myPow = function(x, n) {
  function multi(x,y) {
    let sum = x;
    var i = 1;
    while(i < y) {
      sum = sum * x;
      i++;
    }
    return sum
  }
  if( n === 0) {return 1}
  else if( n ===1) {return x}
  else if(n<0) {
    //几次方
    return multi(1/x,-n)
  } 
   return multi(x,n)
};
/**
 * 
 */
var myPow = function(x, n) {
  if (n < 0) return 1 / myPow(x, -n);
  if (n === 0) return 1;
  if (n % 2 === 0) return myPow(x * x, Math.floor(n / 2));
  return myPow(x * x, Math.floor(n / 2)) * x;
};
