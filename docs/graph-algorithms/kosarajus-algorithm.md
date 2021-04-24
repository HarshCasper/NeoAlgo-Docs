---
title: Kosaraju's Algorithm
slug: /graph-algorithms/Kosarajus-algorithm
---

## Introduction

Kosaraju's Algorithm is basically used to find out the Strongly Connected Components(SCC) in a graph.

The idea here is that if one is able to reach a vertex v starting from vertex u, then one should be able to reach vertex u starting from vertex v and if such is the case, one can say that vertices u and v are strongly connected - they are in a strongly connected sub-graph.

## Explanation

- Perform DFS on the original graph, keeping track of the finish times of each node. Use a stack, when a DFS finishes put the source vertex on the stack. 
- Reverse the graph using an adjaceny list.
- Perform DFS on the reversed graph, with the source vertex as the vertex on top of the stack. When DFS finishes, all nodes visited will form one Strongly Connected Component. If any more nodes remain unvisited, this means there are more Strongly Connected Component's, so pop vertices from top of the stack until a valid unvisited node is found. Repeat this step until all nodes are visited.

## Quick Example : 

- Perform a dfs on the whole graph. Let us start from vertex-0, visit all of its child vertices, and mark the visited vertices as done. If a vertex leads to an already visited vertex, then push this vertex to the stack. 

  For example: 
  1. Starting from vertex-0, go to vertex-1, vertex-2, and then to vertex-3. Vertex-3 leads to already visited vertex-0, so push the source vertex into the stack.

    [![graph-main.png](https://cdn.programiz.com/sites/tutorial2program/files/scc-step-1.png)](https://postimg.cc/Q9nzFp23)

  2. Go to the previous vertex and visit its child vertices i.e. vertex-4, vertex-5, vertex-6 and vertex-7 sequentially. Since there is nowhere to go from vertex-7, push it into the stack. 
  
    [![graph-main.png](https://cdn.programiz.com/sites/tutorial2program/files/scc-step-2.png)](https://postimg.cc/Q9nzFp23)

  3. Go to the previous vertex and visit its child vertices. But, all of its child vertices are visited, so push it into the stack. 
    [![graph-main.png](https://cdn.programiz.com/sites/tutorial2program/files/scc-step-3.png)](https://postimg.cc/Q9nzFp23)

  4. Similarly, a final stack is created. 
    [![graph-main.png](https://cdn.programiz.com/sites/tutorial2program/files/scc-step-4.png)](https://postimg.cc/Q9nzFp23)


- Reverse the original graph.

    [![graph-1.png](https://cdn.programiz.com/sites/tutorial2program/files/scc-reversed-graph.png)](https://postimg.cc/yk2XHcsL)

- Perform dfs on the reversed graph

  1. Pop vertex-0 from the stack. Starting from vertex-0, traverse through its child vertices (vertex-0, vertex-1, vertex-2, vertex-3 in sequence) and mark them as visited. The child of vertex-3 is already visited, so these visited vertices form one strongly connected component. 
    [![graph-main.png](https://cdn.programiz.com/sites/tutorial2program/files/scc-reversed-step-1.png)](https://postimg.cc/Q9nzFp23)

  2. Go to the stack and pop the top vertex if already visited. Otherwise, choose the top vertex from the stack and traverse through its child vertices as presented above. 
    [![graph-main.png](https://cdn.programiz.com/sites/tutorial2program/files/scc-final-graph.png)](https://postimg.cc/Q9nzFp23)


- Now, the strongly connected components are:

  [![graph-main.png](https://cdn.programiz.com/sites/tutorial2program/files/scc-step-3.png)](https://postimg.cc/Q9nzFp23)


## Algorithm

1. For each vertex u, mark u as unvisited. Let L be empty.

2. For each vertex u, do Visit(u), where Visit(u) is the recursive subroutine:
    - If u is unvisited then:
      1. Mark u as visited.
      2. For each out-neighbour v of u, do Visit(v).
      3. Prepend u to L.
  Otherwise do nothing.

3. For each element u of L in order, do Assign(u,u) where Assign(u,root) is the recursive subroutine:
    - If u has not been assigned to a component then:
      1. Assign u as belonging to the component whose root is root.
      2. For each in-neighbour v of u, do Assign(v,root).


## Code

### cpp
  ```

  #include "bits/stdc++.h"
  using namespace std;

  class Graph {
    int V;
    list<int> *adj;
    void fillOrder(int s, bool visitedV[], stack<int> &Stack);
    void DFS(int s, bool visitedV[]);

    public:
    Graph(int V);
    void addEdge(int s, int d);
    void printSCC();
    Graph transpose();
  };

  Graph::Graph(int V) {
    this->V = V;
    adj = new list<int>[V];
  }

  void Graph::DFS(int s, bool visitedV[]) {
    visitedV[s] = true;
    cout << s << " ";

    list<int>::iterator i;
    for (i = adj[s].begin(); i != adj[s].end(); ++i)
      if (!visitedV[*i])
        DFS(*i, visitedV);
  }

  Graph Graph::transpose() {
    Graph g(V);
    for (int s = 0; s < V; s++) {
      list<int>::iterator i;
      for (i = adj[s].begin(); i != adj[s].end(); ++i) {
        g.adj[*i].push_back(s);
      }
    }
    return g;
  }

  void Graph::addEdge(int s, int d) {
    adj[s].push_back(d);
  }

  void Graph::fillOrder(int s, bool visitedV[], stack<int> &Stack) {
    visitedV[s] = true;

    list<int>::iterator i;
    for (i = adj[s].begin(); i != adj[s].end(); ++i)
      if (!visitedV[*i])
        fillOrder(*i, visitedV, Stack);

    Stack.push(s);
  }

  void Graph::printSCC() {
    stack<int> Stack;

    bool *visitedV = new bool[V];
    for (int i = 0; i < V; i++)
      visitedV[i] = false;

    for (int i = 0; i < V; i++)
      if (visitedV[i] == false)
        fillOrder(i, visitedV, Stack);

    Graph gr = transpose();

    for (int i = 0; i < V; i++)
      visitedV[i] = false;

    while (Stack.empty() == false) {
      int s = Stack.top();
      Stack.pop();

      if (visitedV[s] == false) {
        gr.DFS(s, visitedV);
        cout << endl;
      }
    }
  }

  int main() {
    Graph g(8);
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(2, 3);
    g.addEdge(2, 4);
    g.addEdge(3, 0);
    g.addEdge(4, 5);
    g.addEdge(5, 6);
    g.addEdge(6, 4);
    g.addEdge(6, 7);
    cout << "The SCC are:\n";
    g.printSCC();
  }

    return 0;
  }
```

### Python

```
  from collections import defaultdict

  class Graph:

      def __init__(self, vertex):
          self.V = vertex
          self.graph = defaultdict(list)

      def add_edge(self, s, d):
          self.graph[s].append(d)

      def dfs(self, d, visited_vertex):
          visited_vertex[d] = True
          print(d, end='')
          for i in self.graph[d]:
              if not visited_vertex[i]:
                  self.dfs(i, visited_vertex)

      def fill_order(self, d, visited_vertex, stack):
          visited_vertex[d] = True
          for i in self.graph[d]:
              if not visited_vertex[i]:
                  self.fill_order(i, visited_vertex, stack)
          stack = stack.append(d)

      def transpose(self):
          g = Graph(self.V)

          for i in self.graph:
              for j in self.graph[i]:
                  g.add_edge(j, i)
          return g

      def print_scc(self):
          stack = []
          visited_vertex = [False] * (self.V)

          for i in range(self.V):
              if not visited_vertex[i]:
                  self.fill_order(i, visited_vertex, stack)

          gr = self.transpose()

          visited_vertex = [False] * (self.V)

          while stack:
              i = stack.pop()
              if not visited_vertex[i]:
                  gr.dfs(i, visited_vertex)
                  print("")


  g = Graph(8)
  g.add_edge(0, 1)
  g.add_edge(1, 2)
  g.add_edge(2, 3)
  g.add_edge(2, 4)
  g.add_edge(3, 0)
  g.add_edge(4, 5)
  g.add_edge(5, 6)
  g.add_edge(6, 4)
  g.add_edge(6, 7)
  print("The SCCs are:")
  g.print_scc()

```

## Sample Input and Output

#### Input : 
```
Source : 0
Destination : 1
Weight : 4 
Source : 0 
Destination : 2 
Weight : 4 
Source : 1 
Destination : 2 
Weight : 2 
Source : 2 
Destination : 3 
Weight : 3 
Source : 2 
Destination : 5 
Weight : 2 
Source : 2 
Destination : 4 
Weight : 4 
Source : 3 
Destination : 4 
Weight : 3 
Source : 5 
Destination : 4 
Weight : 3
  ```
#### Output: 
```
Edge : Weight

1 - 2 : 2

2 - 5 : 2

2 - 3 : 3

3 - 4 : 3

0 - 1 : 4
```

## Complexity Analysis
- Time Complexity: `O(V+E)`
- Space Complexity: `O(E+V)`

Here, E denote the number of edges and V denote the number of vertices.