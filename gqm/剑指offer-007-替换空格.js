// 第七题
const encodeStr = str => {
  let newStr = ''
  for (const item of str) {
    newStr += item === ' ' ? '%20' : item
  }
  return newStr
}

console.log(encodeStr('we are filmily'))