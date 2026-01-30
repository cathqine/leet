class Solution:
  def isAnagram(self, s: str, t: str) -> bool:
    if (len(s) != len(t)):
        return False
    return sorted(s) == sorted(t)

def main():
   s, t = input().split()
   ans = Solution()
   print(ans.isAnagram(s, t))

if __name__ == "__main__":
  main()