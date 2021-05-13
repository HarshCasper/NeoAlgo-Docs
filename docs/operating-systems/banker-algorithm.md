---
title: Banker Algorithm
slug: /operating-systems/banker-algorithm
---

This page would serve our needs for documentation of the Banker Algorithm.

BANKER’S ALGORITHM FOR DEADLOCK DETECTION
Introduction

Banker’s algorithm is used in the operating systems to avoid deadlocks and allocate resources.
It is called the Banker’s algo because it is used a lot in the banking systems.
When a new process is created in a computer system, the process must provide all types of information 
to the operating system like upcoming processes, requests for their resources, counting them, and delays. 
Based on these criteria, the operating system decides which process sequence should be executed or waited so that no deadlock occurs in a system.
Therefore, it is also known as the deadlock avoidance algorithm or deadlock detection in the operating system.

Sample Problem

A few notations that we must understand here are:
Available:  Indicates which resource is available.
Max: Expression of the maximum number of resources of any type 
Allocation: Indicates which process you have received a resource of type j
Need: Expresses how many more resources can be allocated in the future

Consider a system that contains five processes P1, P2, P3, P4, P5 and the three resource types A, B and C.
Following are the resources types: A has 10, B has 5 and the resource type C has 7 instances.
Process
Allocation
A         B         C
Max
A         B         C
Available
A         B         C
P1
0         1          0
7         5         3
3         3         2
P2
2         0         0
3         2         2


P3
3         0         2
9         0         2


P4
2         1         1
2         2         2


P5
0         0         2
4         3         3

Need [i] = Max [i] - Allocation [i]
Need for P1: (7, 5, 3) - (0, 1, 0) = 7, 4, 3
Need for P2: (3, 2, 2) - (2, 0, 0) = 1, 2, 2
Need for P3: (9, 0, 2) - (3, 0, 2) = 6, 0, 0
Need for P4: (2, 2, 2) - (2, 1, 1) = 0, 1, 1
Need for P5: (4, 3, 3) - (0, 0, 2) = 4, 3, 1
Process
Need
A         B         C
P1
7         4         3
P2
1         2         2
P3
6         0         0
P4
0         1         1
P5
4         3         1







Application:

For example, in the banking field, there is X number of account holders of a specific bank, and the total amount of money of their accounts is G.
When the bank processes a car loan, the software system subtracts the amount of loan granted for purchasing a car from the total money
( G+ Fixed deposit + Monthly Income Scheme + Gold, etc.) that the bank has.
It also checks that the difference is more than or not G. It only processes the car loan when the bank has sufficient money even
if all account holders withdraw the money G simultaneously.

