---
title: Jarvis Algorithm
slug: /computational-geometry/jarvis-algorithm
---

## Introduction

Jarvis Algorithm is **Computational Geometry** Algorithm known for finding the `convex hull` of the given set of points.
This Algorithm is also known by several other names, including the _`Jarvis March Algorithm`_(In the two-dimensional case) and the _`Gift Wrap Algorithm`_.

Can be expanded to multiple dimensions. In 3 dimensions:

- Pick 3 points that form a face and act as a leftmost plane.
- Pick half planes in a similar fashion to picking leftmost lines.


## Explanation

**Convex Hull** is a line that completely surrounds a set of points in a plane while comprising no concavities. More explicitly, it is the smallest  polygon that surrounds a set of points such that each point in the set lies within or on the perimeter of the polygon.

Let's have example:

![convex hull](./convex-hull.png)

In the Jarvis Algorithm, we begin at the leftmost point of the given data set and rotate anti-clockwise to keep the points in the convex hull. The next point is chosen from a current point by checking the orientations of those points from the current point. The point is chosen when the angle is the greatest. Stop the algorithm once all points have been completed and the next point is the start point.

The operation of Jarvis is similar to the operation of selection sort. In selection sort, we find the smallest number in each step and add it to the sorted list. In Jarvis, we find the leftmost point and add it to the convex hull vertices with each step.

## Algorithm

**step 1.** Set **a** to the `leftmost point`.

**step 2.** The following point **b** is the point at which the triplet `(a, b, c)` rotates anticlockwise for any other point **c**.

**step 3.** Set **b** to the next point and then traverse through all points. If **m** is more anticlockwise, i.e., orientation `(a, m, b)` is anticlockwise, we update **b** as **m**. Our final **b** value will be the most anticlockwise point.

**step 4.** Now **b** becomes **a** and we repeat the step(2) and step(3) again.

**step 5.** Repeat above steps until we reach the point where we started.

