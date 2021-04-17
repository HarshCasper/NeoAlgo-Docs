// Guideline : Copy the raw version of this file before making any changes

---
title: Title
slug: /docs/dynamic-programming/Printing-Supersequence
---

## Introduction

We will be given two strings and We have to find the shortest common superstring.

## Explanation

Given two strings X and Y, print the shortest string that has both X and Y as subsequences.

Let's have one example:

Input: X = "AGGTAB",  Y = "GXTXAYB"
Output: "AGXGTXAYB" OR "AGGXTXAYB"
OR Any string that represents shortest
supersequence of X and Y

## Algorithm

- if length of any string is 0 then we cannot find common string
- Run for loop for i till m and j till n
- if letters of both string are equal then we will decrease row and column both by 1
- else letters of both string are not equal then first we will decrease row by 1
- then column by 1 and find maximum value b/w two
- We will start from last cell of the matrix and will check
- if character od X and Y are equal then we will add character to the the element
- and will decrease both row and column by 1
- else we will check which cell has greater value
- if by decreasing row is greater we will decrease row by 1 and add both row and charater element
- else will decrease column by 1 and add both row and charater element.
- if second string length become 0 and first string left then we will traverse it's length and add first string charaters to the result
- if first string length become 0 and second string left then we will traverse it's length and add second string charaters to the resultdo

## Code

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="cpp"
  values={[
    { label: 'C++', value: 'cpp', }
  ]
}>
<TabItem value="cpp">

```cpp
#include <bits/stdc++.h>
using namespace std;
int t[1001][1001];

string longestSubsequence(string X,string Y,int m,int n){
    for(int i=0;i<m+1;i++){
        for(int j=0;j<n+1;j++){
            if(i==0 || j==0)
            t[i][j] = 0;
        }
    }

    for(int i=1;i<m+1;i++){
        for(int j=1;j<n+1;j++){
            if(X[i-1] == Y[j-1]){
                t[i][j] = t[i-1][j-1] + 1;
            }
            else{
                t[i][j] = max(t[i-1][j], t[i][j-1]);
            }
        }
    }
    
    int i=m,j=n;
    string result;
    
    while(i>0 && j>0){
        if(X[i-1] == Y[j-1]){
            result += X[i-1];
            i--;
            j--;
        }
        else{
        if(t[i-1][j] > t[i][j-1]){
            result += X[i-1];
            i--;
        }
        else{
            result += Y[j-1];
            j--;
        }
        }
    }
      
    while(i>0){
        result += X[i-1];
        i--;
    }
        
    while(j>0){
        result += Y[j-1];
        j--;
    }
        
        
    reverse(result.begin(), result.end());
    return result;
}

int main() {
    string X,Y;
    cin>>X>>Y;
    int m = X.length();
    int n = Y.length();
    //memset(t,-1,sizeof(t));
    cout<<longestSubsequence(X,Y,m,n);
    return 0;
}
```

</TabItem>

</Tabs>

## Sample Input and Output

### Input:

```
Enter string X and string Y -
abcdaf
aebcf
```

### Output:

```
Shortest Common Subsequence -
abcf
```

## Complexity Analysis

- Time  complexity - O(m*n)
- Space complexity - O(m*n)

## Credits

- [Megha](https://github.com/Meghag5) contributed the [C++ implementation](https://github.com/TesseractCoding/NeoAlgo/blob/master/C-Plus-Plus/dp/Printing_Shortest_Common_Supersequence.cpp)

