/**
 * 从扑克牌中抽取5张牌，判断这5张牌是不是顺子
 * A 代表 1， J 代表 11 以此类推
 */

const check = (nums) => {
  // 将0排除
  nums = nums.filter(item => item && item).sort((a,b) => a - b)
  // 如果当前的元素中有重复牌
  if(nums.length !== Array.from(new Set(nums)).length) return false


  if(nums[nums.length -1] - nums[0] === 4) {
    // 没有大小王
    return true
  }else if(nums[nums.length -1] - nums[0] === 3 && nums.length <= 4) {
    // 一张王，并且最大差为3
     return true 
  }else if(nums[nums.length -1] - nums[0] === 2 && nums.length <= 3) {
    // 两张王，并且最大差为2
     return true 
  }
  return false
}
console.log(check([13,12,0,10,0]))
console.log(check([5,1,0,2,0]))