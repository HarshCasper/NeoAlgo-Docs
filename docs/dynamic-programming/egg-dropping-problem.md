---
title: Egg Dropping Problem
slug: /dynamic-programming/egg-dropping-problem
---

### The problem statement
Imagine there is a building of `N` floors and you have `K` eggs.
How many minimum number of attempts it would take to find the minimum floor (or first floor) `F` `(0 <= f <= N) ` where any egg dropped at a floor higher than `f` will break, and any egg dropped at or below floor `f` will not break. 

In each move, you may take an unbroken egg and drop it from any floor `f` (where `1 <= f <= N`). 
If the egg breaks, you can no longer use it. However, if the egg does not break, you may reuse it in future moves.

## Approach
When we drop an egg from a floor `f`, there can be two cases:
- The egg breaks 
    We only need to check for floors below `f` with the remaining eggs. So the problem reduces to `(K - 1)` eggs with `(f - 1)` floors
- The egg doesn’t break.
    We only need to check for floors above `f` with the remaining eggs. So the problem reduces to `(K)` eggs and `(N - f)` floors.

This gives rise to the recursive relation
```
F(K, N) = min(1 + F(K - 1, f - 1), F(K, N - f))
```
## Recursive Solution
Below is the code for the above approach.
```
int findCriticalFloor(int K, int N) {
    if(K == 1)  
        return N
    if(N <= 1)
        return N
    
    int floor = Integer.MAX_VALUE;
    
    for(int f = 1; f <= N; f++) {
        floor = Math.minimum(floor, 1 + max(findCriticalFloor(K - 1, f - 1), findCriticalFloor(K, N - f));
    }
    
    return floor;
}
```
## Memoization
The time complexity of the above solution is **exponential** and it runs really slow. If you draw the recursion tree, you can see that there are multiple redundant function calls. Because of this overlapping-subproblems property, we can use **Dynamic Programming** paradigm to solve the problem.

Let's use the Memoization technique to first cache the results. We can use 2D array to store the intermediate results

Below is the code that utilizes the previously computed results.

```
Integer[][] cache = new Integer[K][N];
int findCriticalFloor(int K, int N) {
    if(K == 1)  
        return N
    if(N <= 1)
        return N
    
    if(cache[K][N] != null)     return cache[K][N];
    int floor = Integer.MAX_VALUE;
    
    for(int f = 1; f <= N; f++) {
        floor = Math.minimum(floor, 1 + max(findCriticalFloor(K - 1, f - 1), findCriticalFloor(K, N - f));
    }
    
    cache[K][N] = floor;
    return floor;
}

```


## Better Soltuion
We can convert the above Top-Down Dynamic programming to Bottom-Up version like below. Below approach has a time complexity of `O(K * N * N)`  and has a space complexity of `O(N * K)`.
```
int findCriticalFloor(int n,int k){

    int cache[n + 1][k + 1];
    int i, j, x;

    for(i = 0; i <= k; i++)     cache[0][i] = 0;
    for(i = 0; i <= k; i++)     cache[1][i] = i;
    for(j = 0; j <= n; j++)     cache[j][0] = 0;

    for(i = 2; i <= n; i++){
        for(j = 1; j <= k; j++){
            //Defines the minimum as the highest possible value
            int floor = Integer.MAX_VALUE;

            //Evaluates the value
            for(x = 1; x <= j; x++) 
                floor = Math.min(floor, (1 + Math.max(cache[i][j - x], cache[i - 1][x - 1])));

            //Defines the minimum value for cache[i][j]
            cache[i][j] = floor;
        }
    }

    return cache[n][k];
}

```
## Optimal Solution
We are done with both the Top-Down and Botton-Up versions of our dynamic programming solution. But are we done yet?  **NO!!!**. 
It seems that we can optimize the solution and can arrive at time and space complexities even better than the previous solutions.

#### Optimization 1
Let `dp(K, N)`  be the maximum number of moves needed to solve the problem in state (K, N). Then, by our reasoning above, we have:
```
dp(K, N) = min(max(dp(K - 1, f - 1), dp(K, N - f))) where (1 <= f <= N)
```

Now the key insight: Because `dp(K, N)` is a function that is increasing on `N`, the first term `dp(K - 1, f - 1)` in our `max` expression is an increasing function on `f`, and the second term `dp(K, f − X)` is a decreasing function on `f`. This means that we do not need to check every `f` to find the minimum -- instead, we can **binary search** for the best `X`.

The above approach leads us to a solution with the time complexity `O(K * N * logN)`

#### Optimization 2
Let's think of the problem in a different way.
We have `K` eggs and `M` attempts to determine the critical floor in a `N` floors building `findFloor(K, M)`.
* We use 1 egg and 1 attempt to check if the current floor we are at is indeed "critical".
* Now, if the egg breaks, we can use `(K - 1)` eggs and `(M - 1)` attempts to find the floor with `findFloor(K - 1, M - 1)`.
* If the egg doesn't break, we can use `(K)` eggs and `(M - 1)` attempts to find the floor with `findFloor(K, M - 1)`.

So, the recursive relation becomes:
```
    findFloor(K, M) = 1 + findFloor(K - 1, M - 1) + findFloor(K, M - 1)
```
We are not taking the maximum above because we try with one egg first. If it is broken, the target floor is below the current floor, else it's above. So the number of detected floor is the sum of the two. (above + below + current)

#### Optimization 3
If you observe in our second optimization, we can cut down on space too!!
Below you can find the complete code for the most optimal solution.
## Code

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs
  defaultValue="java"
  values={[
    { label: 'Java', value: 'java', },
    { label: 'Python', value: 'py', },
  ]
}>

<TabItem value="java">

```java
import java.util.*;

public class EggDroppingProblem {
    public static void main(String[] args) {
        //driver code;
        Scanner scanner = new Scanner(System.in);

        //take the necessary input: vertices, edges
        System.out.println("Enter the number of floors: ");
        int numFloors = scanner.nextInt();

        System.out.println("Enter the number of eggs: ");
        int numEggs = scanner.nextInt();

        scanner.close();

        System.out.println("The critical floor is: " + findFloor(numFloors, numEggs));

    }

    private static int findFloor(int numFloors, int numEggs) {
        int[] cache = new int[numEggs + 1];
        //cache[i] stores the value of max floors we can use i eggs and m attemps to detect.

        int attempts = 0;
        for(; cache[numEggs] < numFloors; attempts++) {
            for(int i = numEggs; i > 0; i--) {
                cache[i] = 1 + cache[i] + cache[i - 1];
            }
        }
        
        return attempts;
    }
}

```

</TabItem>

<TabItem value="py">

```python
def findFloor(N, K):
	cache = [0, 0]
	attempts = 0
	while cache[-1] < N:
		for i in range(len(cache) - 1, 0, - 1):
			cache[i] += cache[i - 1] + 1
		if len(dp) < K + 1:
			cache.append(cache[-1])
		attempts += 1
	return attempts

#driver code
numFloors = int(input("Enter the number of floors"))
numEggs = int(input("Enter the number of eggs"))

print("The critical floor is: ", findFloor(numFloors, numEggs))
```

</TabItem>
</Tabs>

## Sample Input and Output

#### Input

```
Enter the number of floors: 14
Enter the number of eggs: 3
```

### Sample Output

```
The critical floor is: 4
```

## Complexity Analysis

 - `N` is the number of floors and `K` is the number of eggs
 - Time Complexity: O(K * logN)
 - Space Complexity: O(K)

## Credits

- [Jahnavi Majji](https://github.com/Jahnavi-Majji) for the [Java](https://github.com/TesseractCoding/NeoAlgo/blob/master/Java/graphs/BipartiteCheck.java) and Python implementation.
