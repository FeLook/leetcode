"""
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-common-prefix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
"""
from typing import List


class Solution:
  def longestCommonPrefix(self, strs: List[str]) -> str:
    """
    解题思路：拿第一个单词，循环取第一个单词的所有字母累加，然后遍历strs数组，看每个word的前缀是否等于从第一个字母累加出来的前缀
    速度快，但是内存占用多
    :param strs: 
    :return: 
    """
    public_prefix = ''
    if len(strs) == 0:
      return public_prefix

    first_word = strs[0]
    for i in range(len(first_word)):
      tmp = first_word[0:i + 1]
      for word in strs:
        if tmp != word[0: i + 1]:
          return public_prefix
      public_prefix = tmp

    return public_prefix


print(Solution.longestCommonPrefix(Solution, ['hello', 'hi']))
