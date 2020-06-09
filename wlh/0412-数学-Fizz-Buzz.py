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
    for i in range(1, n + 1):
      if i % 15 == 0:
        result.append('FizzBuzz')
        continue
      if i % 3 == 0:
        result.append('Fizz')
        continue
      if i % 5 == 0:
        result.append('Buzz')
        continue
        
      result.append(str(i))
      
    return result
    
print(Solution.fizzBuzz(Solution, 1))
