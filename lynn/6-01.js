/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const spObj = {
    IV:'Q',
    IX:'T',
    XL:'P',
    XC:'A',
    CD:'S',
    CM:'Z',
  }
  const obj = {
    I:1,
    Q:4, // IV
    V:5,
    T:9,//IX
    P:40,//XL
    A:90,//XC
    S:400,//CD
    Z:900,//CM
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000,
  };
  let sum = 0;
  // str = s.replace(//g,'he')
  let str =s;
  Object.keys(spObj).forEach((key) => {
    str = str.replace(key,spObj[key])
  })
  str.split('').forEach((key) => {
    sum+=obj[key]
  })
  return sum;
};