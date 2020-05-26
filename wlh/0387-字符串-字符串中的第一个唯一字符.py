class Solution:
    def firstUniqChar(self, s: str) -> int:
        countDict = {}
        for letter in s:
            if countDict.__contains__(letter):
                count = countDict.get(letter)
                countDict[letter] = count+1
            else:
                countDict[letter] = 1

        for k, v in countDict.items():
            if v == 1:
                return s.index(k)
        return -1