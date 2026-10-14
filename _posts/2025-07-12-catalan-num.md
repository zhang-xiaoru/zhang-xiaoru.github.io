---
layout: post
title: Catalan Numbers
date: 2025-07-07 11:12:00-0600
description: Counting binary strings with non-exceeding segments
tags: 
  - combinatorial
  - random walks
categories:
  - math
related_posts: false
---

Catalan numbers occur in various counting problems. The $n$-th Catalan number is expressed as

$$
C_n=\frac{1}{n+1}\binom{2n}{n}
$$


One frequently appearing problem is **Dyck words**.

## Dyck words

A Dyck word is a string consisting of the same number of X's and Y's such that no initial segment of string has more Y than X. For example, the Dyck word XXYYXY has initial segments {X, XX, XXY, XXYY, XXYYX}. None of them has more Y's than X's. 

Catalan number counts the number of Dyck words with length $2n$.

## Random Walks

If we replace the X as 1 and Y as -1 in the Dyck word, it is equivalent to a random walk whose path reaches 0 at the end and **does not pass the origin**. The number of such paths can be found using the reflection principle. 

Suppose the number of $+1$ and $-1$ steps in the walk are both $n$. We consider the complementary case instead, i.e., the number of ways that the path passes the origin at some point. More specifically, if $(s, i)$ denote that the walk is at position $s$ at the $i$-th step, we are looking for a path satisfying $(0, 0)$ and $(2n, 0)$, and $\exists 0\leq j\leq 2n$ s.t. $b<0$ for $(b, j)$. For such a path, we can always find a specific step $k$ s.t. the walk reaches $(-1, k)$.

The reflection principle essentially states that if we flip the path between $0$ and $k$ at the point $k$ respect to $-1$ axis, we then get a new path that start at $(0, -2)$ and reach $(2n, 0)$.  We can do this for every path we consider and get a unique path. Therefore, the question becomes finding number of paths that start $(0, -2)$ and reach $(2n, 0)$. Such a path should contain $n-1$ steps of $-1$ and $n+1$ steps of $+1$. The number of permutations to form paths is thus $\frac{(2n)!}{(n-1)!(n+1)!}$. Thus the number of paths from $(0, 0)$ to $(2n, 0)$ without passing the origin is
 
$$
\frac{(2n)!}{n!n!}-\frac{(2n)!}{(n-1)!(n+1)!}=\binom{2n}{n}-\frac{n}{n+1}\binom{2n}{n}=\frac{1}{n+1}\binom{2n}{n}=C_n
$$

> ### Reflection Principle
>
> Suppose we have a random walk $\left\{S_i\right\}$ with path that $S_0=a$ and $S_n=b$. Denote $N_n(a, b)$ **the number of all possible paths** from $(0, a)$ to $(n, b)$ and $N_n^0(a, b)$ **the number of those paths that visit the origin**, i.e. the path contains a point $(k, 0)$. 
>
> The reflection principle simply states that **the number of paths that visit the origin is the same as the number of 'reflected' paths at the first visit of the origin.**
> $$
> N_n^0(a, b)=N_n(-a, b), \quad a, b>0
> $$
> The essential idea behind the reflection principle is that by reflecting the path from $0$ to $k$, we create a mapping from the original path to the path from $(0, -a)$ to $(n, b)$. The mapping is a bijection, since every inverse maps to a path that passes the origin.
