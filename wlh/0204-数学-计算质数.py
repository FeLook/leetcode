"""
统计所有小于非负整数 n 的质数的数量。

示例:

输入: 10
输出: 4
解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
"""
import math


class Solution:
  def countPrimes(self, n: int) -> int:
    """
    解题思路：排除法，2*2 2*3 2*3 都不是质数，3*2，3*3， 3*4 也不是
    :param n: 
    :return: 
    """
    if n < 2:
      return 0
      
    prime_flag = [1] * n
    prime_flag[0] = 0
    prime_flag[1] = 0
    
    end = int(math.sqrt(n)) + 1
    for i in range(2, end):
      if prime_flag[i] == 1:
        prime_flag[i * i:n:i] = [0] * ((n - 1 - i * i) // i + 1)
    return sum(prime_flag)
    
  def countPrimes2(self, n: int) -> int:
    """
    解题思路：试除法，将识别出的质数保存，下次你用这些质数试除i，循环到sqrt(i)
    :param n: 
    :return: 
    """
    prime_number = []
    if n > 2:
      prime_number.append(2)
      
    for i in range(1, n):
      if i <= 2:
        continue
      
      ifPrime = True
      tmp = math.sqrt(i)
      for x in prime_number:
        if x > tmp:
          break
        if i % x == 0:
          ifPrime = False
          break
      
      
      if ifPrime is True:
        prime_number.append(i)
      
    return prime_number.__len__()
  
print(Solution.countPrimes(Solution, 10))
print(Solution.countPrimes2(Solution, 499979))