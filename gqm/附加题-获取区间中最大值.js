/**
 * 给定一个正整数数列a, 对于其每个区间, 我们都可以计算一个X值;
 * X值的定义如下: 对于任意区间, 其X值等于区间内最小的那个数乘上区间内所有数和;
 * 现在需要你找出数列a的所有区间中, X值最大的那个区间;
 * 如数列a为: 3 1 6 4 5 2; 则X值最大的区间为6, 4, 5, X = 4 * (6+4+5) = 60;
 * 
 */
const sum = (data) => {
  const min = Math.min(...data)
  const sums = data.reduce((pre, cur) =>  pre + cur)
  return min * sums
}

const getSums = (arr) => {
  let length = arr.length, max = 0
  if (!length) return 0
  
  for(let j = 1 ;j < arr.length; j++){
      const newArr = arr.slice(i, j)
      if(sum(newArr) > max){
        max = sum(newArr)
      }else {
        i++
      }
  }
  return max
}

console.log(getSums([3,1,6,4,5,2]))