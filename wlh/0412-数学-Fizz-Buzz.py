"""
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. 
For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
"""
from typing import List


class Solution:
  def fizzBuzz(self, n: int) -> List[str]:
    result = []
    for i in range(n):
      result.append(str(i + 1))
    
    n3 = n // 3
    for i in range(1, n3 + 1):
      result[i * 3 -1] = 'Fizz'

    n5 = n // 5
    for i in range(1, n5 + 1):
      result[i * 5 - 1] = 'Buzz'

    n15 = n // 15
    for i in range(1, n15 + 1):
      result[i * 15 - 1] = 'FizzBuzz'
    
    return result
    
print(Solution.fizzBuzz(Solution, 100))
