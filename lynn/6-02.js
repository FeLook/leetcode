/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let resArr = [];
  for(var i = 1; i<=n; i++) {
    if(i%15==0){
      resArr.push('FizzBuzz')
    } else if(i%5==0) {
      resArr.push('Buzz')
    } else if(i%3==0) {
      resArr.push('Fizz')
    } else {
      resArr.push(String(i))
    }
  }
  return resArr;
};