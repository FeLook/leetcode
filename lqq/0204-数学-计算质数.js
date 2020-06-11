/**
统计所有小于非负整数 n 的质数的数量。

示例:

输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 */



/**
 * @param {number} n
 * @return {number}
 */

 // 判断一个数是否为质数
const isPrime =  function(i) {
    const sqrtN = Math.sqrt(i);
    for(let j = 2 ; j <= sqrtN; j++ ){
        if(i % j === 0) {
            return false;
        }
    }
    return true;
}
var countPrimes = function(n) {
    let count = 0;
    if(n === 0 || n === 1) { 
        return 0;
    }
    for(let i = 2; i < n; i++){
        isPrime(i) && count++;
    }
    return count;
};