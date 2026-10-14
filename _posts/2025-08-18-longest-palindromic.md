---
layout: post
title: Longest Palindromic Substring
description: Find the longest palindromic substring in a given string s
date: 2025-08-18 11:00:00-0600
categories:
  - algorithm
  - python
tags:
  - algorithm
  - string
---

## Dynamic Programming Approach
Time complexity $O(n^2)$, Space complexity $O(n^2)$
```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        # dynamic programming scheme; O(n^2) time complexity; O(n^2) space complexity
        n = len(s)
        truethTable = [[0] * n for _ in range(n)] # table that record if subarray start from i to j is palindromic
        Maxlen = 0
        start = 0
        end = 0
        for i in range(n):
            truethTable[i][i] = 1
        for i in range(n):
            for j in range(i, n):
                if j - i + 1 == 2:
                    if s[i] == s[j]:
                        truethTable[i][j] = 1
                elif j - i + 1 > 2:
                    if s[i] == s[j] and truethTable[i + 1][j - 1] == 1:
                        truethTable[i][j] = 1
                if truethTable[i][j] == 1:
                    if Maxlen < j - i + 1:
                        Maxlen = j - i + 1
                        start = i
        return s[start:start + Maxlen]
```

## Central Expansion

```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        # use central expand
        if len(s) == 1:
            return s
        maxArray = []
        for i in range(len(s)):
            # consider subarray with even length
            evenleft = i
            evenright = i + 1
            while evenleft >= 0 and evenright < len(s) and s[evenleft] == s[evenright]:
                evenleft -= 1
                evenright += 1
            evenSubarray = s[evenleft + 1:evenright]

            # consider subarray with odd length
            oddleft = i
            oddright = i
            while oddleft >= 0 and oddright < len(s) and s[oddleft] == s[oddright]:
                    oddleft -= 1
                    oddright += 1
            oddSubarray = s[oddleft + 1:oddright]

            if len(evenSubarray) > len(maxArray):
                maxArray = evenSubarray
            if len(oddSubarray) > len(maxArray):
                maxArray = oddSubarray
        return maxArray
```



## Improved Central Expansion (Manacher's Algorithm)

```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        if len(s) == 1:
            return s
        extendedS = '#' + '#'.join(s) + '#'
        n = len(extendedS)
        maxPalinList = [1] * n
        maxLen = 1
        maxStr = []
        for i in range(0, n-1):
            if i + maxPalinList[i] <= i + 1:
                extendedR = 0
                while i + 1 - extendedR >=0 and i + 1 + extendedR < n and \
                extendedS[i + 1 - extendedR] == extendedS[i + 1 + extendedR]:
                    extendedR += 1
                maxPalinList[i + 1] = extendedR
            else:
                extendedR = min(maxPalinList[i - 1], maxPalinList[i] - 2)
                while i + 1 - extendedR >= 0 and i + 1 + extendedR < n and \
                extendedS[i + 1 - extendedR] == extendedS[i + 1 + extendedR]:
                    extendedR += 1
                maxPalinList[i + 1] = extendedR
            if maxPalinList[i + 1] > maxLen:
                maxLen = maxPalinList[i + 1]
                maxStr = extendedS[i + 1 - maxLen +1:i + maxLen + 1].replace('#', '')
        return maxStr
```

## Ref

1. <https://cp-algorithms.com/string/manacher.html>
2. 