/**
 * @param {number} n
 * @return {number}
 * 超出时间限制，待解决
 */
var countPrimes = function(n) {
  let arr = 0;
   if(n > 2) {
     for(var i = 2; i< n; i++) {
       var flag = true;
       for (var j = 2; j <= i / 2; j++) {
         if (i % j == 0) {
             flag = false;
             break;
         }
       }
       if(flag) {
         arr++
       }
     }
     return arr
   }
   return  0;
 };