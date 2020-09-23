/**
 * 给定一个数组，最终返回一个二维数组，每个小数组由3个和为 0 的元素组成。全罗列。
  如 [1, 0, -1, 1, 2, -1, -4] // 返回 [[-1,0,1], [-1, -1, 2]]
 */

const getDoubleArray = (array) => {
  const newArray = [];
  const arrayLength = array.length
  let i = 0
  while(i <= arrayLength) {
    newArray[i] = [array[i]]
    let isOk = false
    for (let j = 1; j <= array.length; j++) {
      newArray[i][1] = array[j]
      for (let z = 2; z <= array.length; z++) {
        if(newArray[i][0] + newArray[i][1] + array[z] === 0){
          newArray[i].push(array[z])
          i++
          isOk = true
          break;
        }
      }
      if(isOk) break
    }
    if(!isOk) i++
  }
  return newArray
}

console.log(getDoubleArray([1, 0, -1, 1, 2, -1, -4]))