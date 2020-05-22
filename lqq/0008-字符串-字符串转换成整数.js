/** 
* 首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。接下来的转化规则如下：

* 如果第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字字符组合起来，形成一个有符号整数。
* 假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成一个整数。
* 该字符串在有效的整数部分之后也可能会存在多余的字符，那么这些字符可以被忽略，它们对函数不应该造成影响。
* 注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换，即无法进行有效转换。

 *在任何情况下，若函数不能进行有效的转换时，请返回 0 。
*/

/**
 * @param {string} str
 * @return {number}
 */

const myAtoi = function(str) {
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = 0 - Math.pow(2, 31);
    const newStr = str.trim().match(/^(-|\+)?\d+/g);
    
    if(newStr) {
        const num = Number(String(newStr));
        if (num > INT_MAX) {
            return INT_MAX
        } else if (num < INT_MIN) {
            return INT_MIN
        }
        return num;
    }
    return 0;
};

console.log(myAtoi('4193 with words'));
console.log(myAtoi('words and 987'));