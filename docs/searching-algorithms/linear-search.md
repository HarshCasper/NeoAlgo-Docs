---
title: Linear Search
slug: /searching-algorithms/linear-search
---

# What is Linear Search

Linear search is the simplest of the search algorithms. The motive of any searching algorithm is to search for the presence of a key element in the collection of elements( arrays, linked lists, etc). Linear search starts the search of the key element(the element whose presence in the given list is to be searched) sequentially, from the beginning to the list until it is found. 

# Algorithm

In linear search, we follow the following algorithm:

1. Starting from the leftmost element of the array, compare each element with the key element

2. If the element compared is same as the key, then return the index of the element which matched the key

3. If the key does not match any element scanned in the array, then return -1

# Explanation for Linear Search

### Example 1

```
 Given the below array arr[4]:        
 | 1 | 3 | 5 | 7 |

 The key element = 5

 The key is compared to the first element arr[0]=1
 The key does not match  arr[0]

 Next key is compared to arr[1] = 3
 Key = 5 does not match the arr[1]

 Next key is compared to arr[2] = 5
 Key matches arr[2] and index 2 is returned

```
### Example 2

```
 Given the below array arr[4]:        
 | 1 | 3 | 5 | 7 |

 The key element = 9

 The key is compared to the first element arr[0]=1
 The key does not match  arr[0]

 Next key is compared to arr[1] = 3
 Key = 5 does not match the arr[1]

 Next key is compared to arr[2] = 5
 Key = 5 does not match the arr[2]
 
 Next key is compared to arr[3] = 7
 Key = 5 does not match the arr[3]

 The end of the array is reached. 
 The key is not present in the array
 -1 is returned indicating the absence of the key in array 

```

# Code

```cpp
#include<bits/stdc++.h>
using namespace std;

//Linear Search Algorithm
#include<iostream>
using namespace std;

int main()
{
  int n,i,a;
  // initialize position variable as -1
  int pos=-1;    
  cout<<"Enter number of elements: ";
  cin>>n;
  cout<<"Enter the elements "<<endl;
  int arr[n];

  for(i=0;i<n;i++)
  {
    cin>>arr[i];
  }
  cout<<"Enter element to search ";
  cin>>a;
  
  //loop from 0th to nth element of array
  for(i=0;i<n;i++)    
  {
    //check whether number is present
    if(arr[i]==a)       
    {
      //if found update pos to i i.e. position of the element
      pos = i;       
      cout<<"Found at "<<pos;
      break;       
    }
  }
   // if pos=-1 then element is not found
  if(pos == -1)   
  {
    cout<<"Not Found";
  }
  return 0;
}

```


```python   

def linearSearch(arr, x):
    pos = -1
    for i in range(len(arr)):
        if arr[i] == x:
            pos = i
            print("Found at {}".format(pos))
            
    if pos == -1:
        print("Not Found")

```

# Sample Input and Output

### Input :

```

```

# Time & Space Complexity

Linear search gives linear access to the elements. In the best case, when the element to be searched is present in the first position, then only one iteration will be required. In the worst case when the element to be searched is present in the last position, linear search will have to go through all the elements. Therefore its time complexity is O(n).

In linear search, no extra space is used to store anything. So the space complexity is O(1).

### Time Complexity: O(n)
### Time Complexity: O(1)



### Credits
1. [Rajiv Singh]() for the [C++ implementation](https://github.com/TesseractCoding/NeoAlgo/blob/master/C-Plus-Plus/search/Linear_Search.cpp)

2. [Ricardo Prins](https://github.com/ricardoprins) for the [Python implementation](https://github.com/TesseractCoding/NeoAlgo/blob/master/Python/search/Linear_Search.py)
