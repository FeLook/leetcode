const fractionToDecimal = (num1, num2) => {
  if(!num1) return '0'

  let sign = Math.sign(num1) * Math.sign(num2) > 0 ? ''  : '-'
  num1 = Math.abs(num1)
  num2 = Math.abs(num2)

  // 处理整除情况
  let str = '', reset
  reset = Math.floor(num1 / num2)
  num1 %= num2
  if(!num1) return sign + reset + ''

  let index = 0, map = {}, result = reset + '.'
  while(map[num1] === undefined){ // 没找到之前的除式
      map[num1] = index++ // 记录除数位置
      num1 *= 10
      str += Math.floor(num1 / num2)
      num1 %= num2
      if(!num1) return sign + result + str
  }

  let pos = map[num1] 
  return `${sign}${result}${str.slice(0, pos)}(${str.slice(pos)})`
}

console.log(192901232966821,1562500000000000 )