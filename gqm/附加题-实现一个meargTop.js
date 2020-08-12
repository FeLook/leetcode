/**
 * 实现一个方法 MergeTopOf(n, ...arrays)，其中n是一个整数，arrays是若干个已经从小到大排序的整数数组，
 * 要求这个方法返回一个数组，包含输入的arrays中最小的n个整数，如果输入的所有数组中包含的整数不超过n 个，
 * 返回已排序的数组，其中包含输入数组中的所有元素
 * 例如：
 * MergeTopOf(1, [1,3,4],[2,7],[5]) 返回 [1]
 * MergeTopOf(3, [1,3,4],[2,7],[5]) 返回 [1,2,3]
 * MergeTopOf(3, [1,3,4],[2,7],[5]) 返回 [1,2,3]
 * MergeTopOf(999, [1,3,4],[2,7],[5]) 返回 [1,2,3,4,5,7]
 * 现在如果我们输入n = 10000和10000组数组，每个数组包含10000多个整数，要求方法在1s内给出答案
 */
const arr = new Array(10000);
for (let i = 0; i < arr.length; i++) {
  arr[i] = [];
  for (let j = 0; j < 10000; j++) {
    arr[i].push(j);
  }
}

// 时间不合格
const mergeTop = (n, ...nums) => {
  const arr = nums.flat();
  if( !arr.length ) return []
  if( n > arr.length ) return arr.sort((a,b) => a - b)
  return arr.sort((a,b) => a - b).slice(0, n)
};

// console.log(mergeTop(1, [1,3,4],[2,7],[5]))
// console.log(mergeTop(3, [1,3,4],[2,7],[5]))
// console.log(mergeTop(9, [1,3,4],[2,7],[5]))

console.time();
console.log(mergeTop(10000, arr));
console.timeEnd();
