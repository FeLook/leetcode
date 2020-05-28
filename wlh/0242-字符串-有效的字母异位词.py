"""
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-anagram
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
"""
class Solution:
  def isAnagram(self, s: str, t: str) -> bool:
    """
    解题思路：因为都是小写字母，将字母转成质数数组，然后相加，如果结果相同则为异位词
    :param s: 
    :param t: 
    :return: 
    """
    nums = [2, 3, 5, 7,11,13,17,19,23,31,41,43,47,53, 57, 59, 61, 67,69,71,73,79,83,87,89,91]
    print(len(nums))
    
    a_int = ord('a')
    s_result = 1;
    t_result = 1;
    for letter in s:
      s_result = s_result * nums[ord(letter) - a_int]
    for letter in t:
      t_result = t_result * nums[ord(letter) - a_int]
      
    return s_result == t_result
      


print(Solution.isAnagram(Solution, "hello", "llho"))
