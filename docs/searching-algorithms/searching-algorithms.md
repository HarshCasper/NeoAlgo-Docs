---
title: What are Search Algorithms?
slug: /searching-algorithms
---

## Introduction

Searching is a method of finding whether an element or a value exists in the given list of elements or values. If the element exists, then it returns its position. In the real world, there are many useful applications based on searching, be that seeking a whole database to find a certain file or it might be a simple connection from your contact list. If you wanna find something from a collection of items, you gotta need this algorithmic process.

Few Notable examples -
* Finding a particular user from a social media network
* Looking for the desired word from a dictionary
* Querying the availability of products from an eCommerce website
* Using it to solve other problems including, knapsack, sudoku, etc.
* Helping search engines to display the right results.

and many as such.

## Searching Algorithm

In computer terms, an algorithm that solves the searching problem is a searching algorithm. Simple as it is. 

With that said, many smart minds, came up with their way of searching techniques - or to be clear in terms - searching algorithms to perform searching.

Below is the list of some Searching Algorithms -
* Linear Search
* Binary Search
* Jump Search
* Interpolation Search
* Exponential Search
* Sublist Search
* Fibonacci Search

## Popular Searching Algorithms

There might be many such algorithms ( with the above mentioned ), but only those are good which are sufficient in most cases. In short, only those are considered as good which has good time complexity ( run time ) & space complexity ( space-time ).

Let's go one by one & find out which is good over the other 

### Linear Search

As the name hints, it works linearly. Meaning, it starts from the very first element till it finds the required/asked element in the collection. Clearly, 
1. Best Case - The element to be searched, is the first element
2. Worst Case - The element to be searched, is the endmost element

The practical uses of linear search are a very rare cause of the way its search. It's quite costly (w.r.t time) to go for, e.x., it will be really hard for AWS developers to go through the complete database from the starting point to get what they want. 

### Binary Search

Widely used algorithm, where elements are searched in a unique way of "Divide and Conquer". Elaborating, the algorithm works as - 

> Get the collection and divide it into two sub-collections until you won't get the element.

It creates two halves, checks whether the element is in the first half or second half. If second, then halves it into yet another two parts, then check where the element is going to reside, and so on. It will keep repeating itself till it finds out the element.

While stating, it should be clear that it works on sorted collection. Disadvantage if you choose the bad sorting algorithm. Else it is good to go.

### Jump Search

With the mindl flow as of binary search, jump search adds its jump step to do searching. 

> Take a fixed number of jumps to skip few elements

If the collection contains, some, 36 elements then the jump search will take a jump of 6 from the starting i.e Jump from index 0 to 6, then check if the given element is smaller than the 6th element of the collection, if it is, then loops through these 0 to 6 elements to get that element i.e performing a linear search.

As you can note, it works on sorted collection of elements only.

### Interpolation Search

As written in the list, Binary Search is quite a famous dude among the rest with its reason of consuming the lesser time & thus being efficient.


