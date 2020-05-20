/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
   const strArr = str.trim().match(/\d+/g) || []; // 有数字长度不为1
  if(Number(str.trim().charAt()) >= 0 ) {
    //开头是数字
    return strArr.length > 0 ? Math.min(Math.pow(2,31) -1, parseInt(strArr.join(','))) : 0
  } else if(str.trim().startsWith('-') && Number(str.trim().charAt(1)) >= 0 && str.trim().charAt(1).trim()) {
    console.log(str.trim().charAt(1))
    // -号开头，判断第二位是否为数字
    return strArr.length > 0  ? Math.max(-Math.pow(2,31), parseInt('-'+strArr.join(','))):0
  } else if(str.trim().startsWith('+')  && Number(str.trim().charAt(1)) >= 0 && str.trim().charAt(1).trim()) {
    return strArr.length > 0 ? Math.min(Math.pow(2,31) -1, parseInt(strArr.join(','))) : 0
  }
  return 0;
};