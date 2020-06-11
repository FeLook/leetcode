/**
 * 给定一个Excel表格中的列名称，返回其相应的列序号。

  例如，

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...

    其实就是 二十六进制数转为十进制数。
 */
/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = (s) => {
  var arr = s.split(""),
  result = 0,
  beishu = 1;
 
  while(arr.length !== 0){
      result += (arr.pop().charCodeAt() - 64) * beishu;
      beishu *= 26;
  }
  return result;
};

console.log(titleToNumber('AB'))
console.log(titleToNumber('AA'))