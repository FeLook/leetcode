// 第六题
const soreStr = str => {
  const splitArr = str.split('')

  let ret = []

  for (let i = 0; i < splitArr.length; i++) {
    const nextArr = splitArr.slice(0, i).concat(splitArr.slice(i + 1))
    const rest = nextArr.length ? soreStr(nextArr.join('')) : []
    if (!rest.length) {
      ret.push(splitArr[i])
    } else {
      for (let j = 0; j < rest.length; j++) {
        if(!ret.includes([splitArr[i]].concat(rest[j]).join(''))){
          ret.push([splitArr[i]].concat(rest[j]).join(''))
        }
      }
    }
  }
  return ret
}
console.log(soreStr('f'))
console.log(soreStr('abc'))
console.log(soreStr('aab'))