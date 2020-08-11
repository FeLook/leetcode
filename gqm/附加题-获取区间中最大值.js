/**
 * 给定一个正整数数列a, 对于其每个区间, 我们都可以计算一个X值;
 * X值的定义如下: 对于任意区间, 其X值等于区间内最小的那个数乘上区间内所有数和;
 * 现在需要你找出数列a的所有区间中, X值最大的那个区间;
 * 如数列a为: 3 1 6 4 5 2; 则X值最大的区间为6, 4, 5, X = 4 * (6+4+5) = 60;
 * 
 */


const getSums = (arr) => {
  let length = arr.length, max = 0
  if (!length) return 0
  const sum = (data) => {
    const min = Math.min(...data)
    const sums = data.reduce((pre, cur) =>  pre + cur)
    return min * sums
  }
  for(let i = 0 ;i <= arr.length - 1; i++){
    for(let j = 1 ;j <= arr.length; j++){
        const newArr = arr.slice(i, j)
        if(newArr.length && sum(newArr) > max){
          max = sum(newArr)
        }
    }
  }
  return max
}

console.log(getSums([1,2,3]))
console.log(getSums([200,3]))
console.log(getSums([3,2,6,5,4]))