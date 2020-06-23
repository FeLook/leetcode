/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const len = digits.length;
    for(let i = len -1; i >= 0; i-- ) {
       digits[i]++;
       digits[i] = digits[i] % 10;
       if(digits[i] != 0) {
           return digits; // 最后没有进位直接返回
       }
    }
    digits.splice(0,0, 1);
    return digits;
};