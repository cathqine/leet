import json
from typing import List

class Solution:
  def __init__(self, nums):
    self.nums = nums
    
  def hasDuplicate(self, nums: List[int]) -> bool:
    return len(nums) > len(set(nums))

def main():
  str = input()
  if len(str) < 2 or str[0] != '[' or str[-1] != ']':
    print("Please enter an array in the format of [a,b,c...x,y,z] where a..z are numbers\n")
    exit(1)

  nums = json.loads(str)
  obj = Solution(nums)
  print(obj.hasDuplicate(nums))

if __name__ == "__main__":
  main()