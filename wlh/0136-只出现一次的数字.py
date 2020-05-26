"""
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4
"""
from typing import List


class Solution:
  def singleNumber(self, nums: List[int]) -> int:
    """
    使用set存储，如果重复就删除（因为只有两个相同的可以这么做），速度会快一些，但是使用了额外空间
    :param nums: 
    :return: 
    """
    nums_set = set()
    for n in nums:
      if nums_set.__contains__(n) is False:
        nums_set.add(n)
      else:
        nums_set.remove(n)

    return nums_set.pop()


print(Solution.singleNumber(Solution, [4, 1, 2, 1, 2]))
