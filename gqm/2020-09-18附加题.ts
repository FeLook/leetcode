/**
 * 写一个算法 实现一个字符串的规则解析：例子：a(b)<2>c 输出：abbc，a(b(c)<3>de)<2>f 
 * 输出abcccdebcccdef；()代表重复内容，<>代表重复的次数
 */

const getString = (str) => {
  let newStr = ''
  // 去除所有的括号，更换成*
  str.replace(/[(|)]/g,"*")
  for(let i = 0; i < str.length; i++){
    if(str[i] === '*'){
      
    }else {
      newStr += str[i]
    }
  }

}

console.log(getString('a(b(c)<3>de)<2>f '))