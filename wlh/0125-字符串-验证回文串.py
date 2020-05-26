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

            for t in range(j, i-1, -1):
                backward = s[t]
                if backward.isalnum():
                    break

            if forward.lower() != backward.lower():
                return False

            j = t - 1
        return True


