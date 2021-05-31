---
title: Bubble Sort
slug: /sorting-algorithms/bubble-sort
---

## Introduction

The bubble sort is a simple sorting algorithm which compares two adjacent elements and swaps them if they are not in the correct order.

## Explanation

Let's have an array arr[] where we have the following elements: ```5 4 3 2 1```

![Imgur](https://i.imgur.com/mrC2YZn.png)

![Imgur](https://i.imgur.com/snYKCMG.png)

![Imgur](https://i.imgur.com/blbuUB2.png)

![Imgur](https://i.imgur.com/XLxdlis.png)

## Algorithm

* Starting with the first element, compare the current element with the next element of the array.
* If the current element is greater than the next element of the array, swap them.
* If the current element is less than the next element, move to the next element.
* Repeat Step 1.


## Code

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="cpp"
  values={[
    { label: 'C++', value: 'cpp', },
    { label: 'Python', value: 'py', },
  ]
}>
<TabItem value="cpp">

```cpp
#include <bits/stdc++.h>
using namespace std;	//For cin and cout
void bubblesort(int[], int);
int main()
{
	//Declarartion of required variables
	int n, arr[100], num;	
	cout << "Enter the number of elements of the array: ";
	//Getting the number of elements of the array from the user
	cin >> n;	
	cout << endl << "Enter the elements of the array to be sorted: " << "\n";
	for (int i = 0; i < n; i++)
	{
		//For loop for taking elements of the array from the user, can be space-seperated as well
		cin >> num;
		arr[i] = num;
	}
	bubblesort(arr, n);
	cout << "Array after sorting is:" << endl;
	for (int i = 0; i < n; i++)
	{
		//For loop for printing out the array after sorting
		cout << arr[i] << " ";
	}
}
void bubblesort(int arr[], int n)
{
	int temp;
	for (int i = 0; i < n - 1; i++)
	{
		// declaring a sorted variable which will check if array is already sorted or not
		bool sorted = true;	
		for (int j = 0; j < n - 1 - i; j++)
		{
			//Inner for loop
			if (arr[j] > arr[j + 1])
			{	
				//Swapping the elements, temp is used to store the temporary variable
				temp = arr[j + 1];	
				arr[j + 1] = arr[j];
				arr[j] = temp;
				// sorted value will be updated to false if there is swapping of elements occured 
				sorted = false;	
			}
		}
		if (sorted)
		{
			break;
		}
	}
}
```

</TabItem>
<TabItem value="py">

```py
def bubble_sort(Array):

    n = len(Array)
    for i in range(n-1):
        flag = True
        for j in range(n-i-1):
            if Array[j] > Array[j+1]:
                flag = False
                Array[j], Array[j+1] = Array[j+1], Array[j]
        if flag:
            break


if __name__ == "__main__":
    
    print("Enter the elements of the list to be sorted: ")
    Array = [int(x) for x in input().split(" ")]
    bubble_sort(Array)
    print("List after sorting: ")
    for i in Array:
        print(i, end=" ")

```

</TabItem>
</Tabs>

## Sample Input and Output

#### Input:
```
2 5 1 6 3 9 10 8
```

#### Output:
```
1 2 3 5 6 8 9 10
```

## Complexity Analysis

- Time  complexity - ```O(n^2)```
- Space complexity - ```O(1)``` 

## Credits

- [Rohan Babbar](https://github.com/rohanbabbar04) contributed the [C++ implementation](https://github.com/TesseractCoding/NeoAlgo/blob/master/C-Plus-Plus/sort/Bubble_Sort.cpp)
- [Saloni Swagata](https://github.com/SaloniSwagata) contributed the [Python implementation](https://github.com/TesseractCoding/NeoAlgo/blob/master/Python/sort/Bubble_Sort.py)