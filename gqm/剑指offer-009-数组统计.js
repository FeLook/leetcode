/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出他
 */

const findArray = (numbers) => {
  if (!numbers.length) return 0;
  const len = parseInt(numbers.length / 2)
  let oMap = new Map()
  for(const i of numbers){
    oMap.set(i, oMap.has(i) ? oMap.get(i) + 1 : 1)
    if(oMap.get(i) > len) return i
  }
};

console.log(findArray([5,4,4,4,4,2,2]))
