from typing import List


class Solution:
  
  def twoSum(self, nums: List[int], target: int) -> List[int]:
    """
    用一个字典去存nums值和位置的关系，因为会有重复的值，所以字典的值用List存，循环nums，判断map是否存在 targe-nums[i]的值  
    :param nums: 
    :param target: 
    :return: 
    """
    nums_position = {}
    
    # 第一个循环处理数组值和位置的map关系
    for i in range(len(nums)):
      n = nums[i]
      if nums_position.__contains__(n):
        list = nums_position[n]
        list.append(i)
        nums_position[n] = list
      else:
        # 位置用list存，因为有重复的值
        list = [i]
        nums_position[n] = list
        
    
    # 第二个循环开始找和的两个加数
    for i in range(len(nums)):
      n = nums[i]
      other_n = target - n 
      if nums_position.__contains__(other_n):
        list = nums_position[other_n]
        for position in list:
          if i != position:
            return [i, position]
        
    return []
  
nums = [2, 7, 11, 15]
target = 18
print(Solution.twoSum(Solution, nums, target))