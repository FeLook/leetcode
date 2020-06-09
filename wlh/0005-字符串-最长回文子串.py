"""
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
"""
class Solution:
  def isPalindrome(self, s: str) -> bool:
    length = len(s)
    if length == 0 or length == 1:
      return True

    j = length - 1
    for i in range(length):
      if i > j or j == i:
        return True

      forward = s[i]
      if forward.isalnum() is False:
        continue

      for t in range(j, i - 1, -1):
        backward = s[t]
        if backward.isalnum():
          break

      if forward.lower() != backward.lower():
        return False

      j = t - 1
    return True
  
  def longestPalindrome(self, s: str) -> str:
    s_length = len(s)
    for i in range(s_length, -1, -1):
      for j in range(0, s_length):
        if j + i > s_length:
          break
        tmp = s[j: j + i]
        if self.isPalindrome(tmp):
          return tmp
    return ''

  def longestPalindrome2(self, s: str) -> str:
    max_palindrome_length = 0
    max_palindrome = ''
    s_length = len(s)
    for i in range(s_length):
      j = i + max_palindrome_length + 1
      while j <= s_length:
        tmp = s[i:j]
        if self.isPalindrome(tmp) is True:
          if len(tmp) > max_palindrome_length:
            max_palindrome_length = len(tmp)
            max_palindrome = tmp
        j = j + 1
    return max_palindrome
    
  
  


if __name__ == '__main__':
  s = Solution()
  print(s.longestPalindrome('babad'))
  print(s.longestPalindrome('mwwfjysbkebpdjyabcfkgprtxpwvhglddhmvaprcvrnuxifcrjpdgnktvmggmguiiquibmtviwjsqwtchkqgxqwljouunurcdtoeygdqmijdympcamawnlzsxucbpqtuwkjfqnzvvvigifyvymfhtppqamlgjozvebygkxawcbwtouaankxsjrteeijpuzbsfsjwxejtfrancoekxgfyangvzjkdskhssdjvkvdskjtiybqgsmpxmghvvicmjxqtxdowkjhmlnfcpbtwvtmjhnzntxyfxyinmqzivxkwigkondghzmbioelmepgfttczskvqfejfiibxjcuyevvpawybcvvxtxycrfbcnpvkzryrqujqaqhoagdmofgdcbhvlwgwmsmhomknbanvntspvvhvccedzzngdywuccxrnzbtchisdwsrfdqpcwknwqvalczznilujdrlevncdsyuhnpmheukottewtkuzhookcsvctsqwwdvfjxifpfsqxpmpwospndozcdbfhselfdltmpujlnhfzjcgnbgprvopxklmlgrlbldzpnkhvhkybpgtzipzotrgzkdrqntnuaqyaplcybqyvidwcfcuxinchretgvfaepmgilbrtxgqoddzyjmmupkjqcypdpfhpkhitfegickfszermqhkwmffdizeoprmnlzbjcwfnqyvmhtdekmfhqwaftlyydirjnojbrieutjhymfpflsfemkqsoewbojwluqdckmzixwxufrdpqnwvwpbavosnvjqxqbosctttxvsbmqpnolfmapywtpfaotzmyjwnd'))
  print(s.isPalindrome('a'))
