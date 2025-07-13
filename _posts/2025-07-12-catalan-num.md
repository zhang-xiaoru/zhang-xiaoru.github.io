---
layout: post
title: Catalan Numbers
date: 2025-07-07 11:12:00-0600
description: counting for binary string with non-exceeding segments
tags: 
  - combinatorial
  - random walks
categories:
  - math
related_posts: false
---



# Catalan Numbers

Catalan numbers occurs in various counting problems. The $n$-th Catalan number  is expressed as
$$
C_n=\frac{1}{n+1}\binom{2n}{n}
$$


One frequently appeared problem would be **Dyck words**.

## Deck words

A Dyck word is a string consisting of same naumber of X and Y's such that no initial segment of string has more Y than X. For example, a Dyck words XXYYXY has initial segment {X, XX, XXY, XXYY, XXYYX}. All of them has number of Y less than X. 

Catalan number counts the number of Dyck words with length $2n$.

## Random Walks

If we replace the X as 1 and Y as -1 in the Dyck word, it is equivalent to a random walks that the path reaches 0 at the end and **does not pass the origin**. The number of such paths can be found using reflection principles. 

Suppose the number of $+1$ and $-1$steps  in the walks are both $n$. We consider the complementray case instead, i.e., the number of ways that the path pass the origin at some point. More specifically, if $(s, i)$ denote that the walk is at position $s$ at $i$-th steps, we are looking for a path satisfying $(0, 0)$ and $(2n, 0)$, and $\exist 0\leq j\leq 2n$ s.t. $b<0$ for $(b, j)$. For such a path, we can always find a specific step $k$ s.t. the walk reach $(-1, k)$.

The reflection principles essintally states that if we flip the path between $0$ and $k$ at the point $k$ respect to $-1$ axis, we get then get a new path that start at $(0, -2)$ and reach $(2n, 0)$.  We can do this for every path we consider and get a unique path. Therefor, the question becomes finding number of paths that start $(0, -2)$ and reach $(2n, 0)$. Such path should contains $n-1$ steps of $-1$ and $n+1$ steps of $+1$. The number of permutations to form paths is thus $\frac{(2n)!}{(n-1)!(n+1)!}$. Thus the number of path from $(0, 0)$ to $(2n, 0)$ without passing the origin is 
$$
\frac{(2n)!}{n!n!}-\frac{(2n)!}{(n-1)!(n+1)!}=\binom{2n}{n}-\frac{n}{n+1}\binom{2n}{n}=\frac{1}{n+1}\binom{2n}{n}=C_n
$$

> ### Reflection Principle
>
> Suppose we have a random walk $\left\{S_i\right\}$ with path that $S_0=a$ and $S_n=b$. Denote $N_n(a, b)$ **the number of all possible paths** from $(0, a)$ to $(n, b)$ and $N_n^0(a, b)$ **the number of those paths that visit the origin**, i.e. the path contain point $(k, 0)$. 
>
> The reflection principle simply states that **the number of paths that visit the origin is the same with the number of 'reflected' paths at the first visit of the origin.**
> $$
> N_n^0(a, b)=N_n(-a, b), \quad a, b>0
> $$
> The essential idea behind the relfection principle is that by reflecting the path from $0$ to $k$, we create a mapping from the original path to the path from $(0, -a)$ to $(n, b)$. The mapping is bijection by noticing that every inverse will maped to a path that pass the origin.
