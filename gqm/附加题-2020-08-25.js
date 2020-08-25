/**
 * 算法题「移动零」，给定一个数组 nums，
 * 编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 */

const changeZero = (nums) => {
  let arr = []
  while(nums.indexOf(0) !== -1) {
    const nIndex = nums.indexOf(0)
    arr.push(nums[nIndex])
    nums.splice(nIndex, 1)
  }
  return nums.concat(arr)
}

console.log(changeZero([0,0,1,2,2,3,4,0,0,6]))