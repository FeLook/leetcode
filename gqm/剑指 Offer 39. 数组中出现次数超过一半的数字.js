/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1:

输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
输出: 2

限制：

1 <= 数组长度 <= 50000

*/

const findBiggerNumber = (arr) => {
  const nLength = Math.floor(arr.length / 2)
  const oMap = new Map()
  arr.forEach(item => {
    if(oMap.has(item)){
      oMap.set(item, oMap.get(item) + 1)
    }else {
      oMap.set(item, 1)
    }
  })
  console.log(oMap)
  for (let [key, value] of oMap) {
    if(value > nLength){
      return key
    }
  }
  return 0
}


console.log(findBiggerNumber([1, 2, 3, 2, 4, 4, 5, 4, 4,4,4,4,4,2]))