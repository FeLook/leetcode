/**
 * 
  字符          数值
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000
 */


/**
 * @param {string} s
 * @return {number}
 */
const romanToIntOne = function (num) {
  let result = 0;
  if (num.includes("IV") || num.includes("IX")) result -= 2;
  if (num.includes("XL") || num.includes("XC")) result -= 20;
  if (num.includes("CD") || num.includes("CM")) result -= 200;
  for (let c of num) {
    switch (c) {
      case "I":
        result += 1;break;
      case "V":
        result += 5;break;
      case "X":
        result += 10;break;
      case "L":
        result += 50;break;
      case "C":
        result += 100;break;
      case "D":
        result += 500;break;
      case "M":
        result += 1000;break
    }
  }

  return result
};

console.log('result', romanToIntOne('MCMXCIV'));