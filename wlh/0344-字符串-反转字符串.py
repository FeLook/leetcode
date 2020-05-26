from typing import List


class Solution:
  def reverseString(self, s: List[str]) -> None:
    """
    Do not return anything, modify s in-place instead.
    """
    length = len(s)
    for i in range(length):
      j = length - 1 - i
      if i > j:
        break
      head = ord(s[i])
      tail = ord(s[j])
      
      head = head ^ tail
      tail = tail ^ head
      head = head ^ tail
      
      s[i] = chr(head)
      s[j] = chr(tail)

  def reverseString2(self, s: List[str]) -> None:
    length = len(s)
    for i in range(length):
      j = length - 1 - i
      if i > j:
        break
      tmp = s[j]
      s[j] = s[i]
      s[i] = tmp


list = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]
Solution.reverseString(Solution, list)
print(list)

list = ["A"," ","m","a","n",","," ","a"," ","p","l","a","n",","," ","a"," ","c","a","n","a","l",":"," ","P","a","n","a","m","a"]
list.reverse()
print(list)
