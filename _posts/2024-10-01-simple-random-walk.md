---
layout: post
title: Simple Random Walk
date: 2024-10-01 21:24:00-0600
description: note in simple random walk
tags:
  - stochastic process
  - random walks
categories:
  - probability
  - stochastic

---
# What is simple random walk
Simple random walk is one of the most simple example of stochastic process.

Suppose at each discrete time step $n$ a particle move towards positive axis by 1 unit length with probability of $p$ and move 1 unit the opposite way otherwise. If we denote the move of the particle at step $n$ as $X_n$, then $X_n$ is a Bernoulli variables and the sequence $X_1, X_2, \cdots$ is assume to be independent. The position of the particle after $n$ moves, denoted by $S_n$ is
$$
S_n = S_0+\sum_{i=1}^nX_i\notag
$$
the walk is called *symmetric* if $p=1/2$. 
# Conditioned properties
One of the main technique used in random walk is to conditioned on the first step f the walk and then solve the ensuring difference equation. Some important properties of conditional probabilist of random walk is as follows:

* Spatial homogeneity$$\mathbb{P}(S_n=j|S_0=a)=\mathbb{P}(S_n=j+b|S_0=a+b)$$
* Temporal homogeneity$$\mathbb{P}(S_{n+m}=j|S_m=a)=\mathbb{P}(S_n=j|S_0=a)$$
* Markov property (memory less)$$\mathbb{P}(S_{m+n}=j|S_0, S_1,\cdots, S_m)=\mathbb{P}(S_{m+n}=j|S_m), \quad n\geq 0$$. This means that conditional upon knowing the value of the process at $m$ step, the value after $m$ step do not depend on values before $m$ step. 

# Counting paths of random walk

Another useful technique is counting methods. Suppose $X_1, X_2, \cdots$ are independent random variables, each taking the values -1 and 1 with probability $q$ and $p$. A simple random walk with initial state at $S_0=a$ is thus
$$
S_n = a+\sum_{i=1}^nX_i\notag
$$


## Position of walk after $n$ steps

Any possible path is unequally defined by set of states $s_0,s_1, s_2, \cdots$. The probability that the first $n$ steps of walk follow a given path $(s_0, s_1, \cdots, s_n)$ is $p^rq^l$ where r and l are the number of right and left steps. The probability of $S_n=b$ is thus a binomial
$$
P(S_n=b) = \binom{n}{r}p^{r}q^{n-r}=\binom{n}{\frac{1}{2}(n+b-a)}p^{\frac{1}{2}(n+b-a)}q^{\frac{1}{2}(n-b+a)}\notag
$$
Where we use the relationship $r+l=n$ and $r-l=b-a$ to solve for $r$ and $l$.

## The reflection principle

The reflection principle is one important techniques for counting paths. Suppose we have a random walk $\left\{S_i\right\}$ with path that $S_0=a$ and $S_n=b$. Denote $N_n(a, b)$ **the number of all possible paths** from $(0, a)$ to $(n, b)$ and $N_n^0(a, b)$ **the number of those paths that visit the origin**, i.e. the path contain point $(k, 0)$. 

The reflection principle simply states that **the number of paths that visit the origin is the same with the number of 'reflected' paths at the first visit of the origin.**
$$
N_n^0(a, b)=N_n(-a, b), \quad a, b>0\text{ and }N_n(a, b)=\binom{n}{1/2(n+b-a)}\notag
$$
Notice that for a paths that visit origin first time at point $(k, 0)$, we cna flip the path from $0$ to $k$ and create a unique path from $(0, -a)$ to $(n, b)$, therefor creating a one-one mapping between the collection of two such paths. 

**A plot of relfected path here**

## No revisit path

### Number of no revisit path

If $b>0$, then the number of paths from $(0, 0)$ to $(n, b)$ which **do not revisit origin** is $(b/n)N_n(0, b)$.

If the first step move to left (-1), then the path have to revisit the origin in the future. Thus, the first step of no revisit paths has to be $(1, 1)$, then the total number of no revisit paths is
$$
N_{n-1}(1, b)-N^0_{n-1}(1, b)=N_{n-1}(1, b)-N_{n-1}(-1,b)=\binom{n-1}{1/2(n+b-1)}-\binom{n-1}{1/2(n+b)}
$$


### Probability of no revisit

The probability of a path $S$ with $S_0=0$ and $S_n=b$ with no revisit to the origin is
$$
\mathbb{P}(S_1S_2\cdots S_n\neq0, S_n=b)=\frac{|b|}{n}\mathbb{P}(S_n=b)\notag
$$
the probability of the path $S$ that do not revisit its origin in the first $n$ step is just sum over all $b$ for the probability above
$$
\mathbb{P}(S_1S_2\cdots S_n\neq0)=\frac{1}{n}E(|S_n|)\notag
$$
The first probability is easily obtained noticing that the probability for each such path is $p^{1/2(n+b)}q^{1/2(n-b)}$ and the total number of no revisit paths is $(b/n)N_n(0, b)$. 

## Maximum position

### Probability of maximum position of a walk

Denote the maximum position during first $n$ steps as $M_n=\max\{S_i:0\leq i\leq n\}$, and $S_0=0, S_n=b$.  Then the probability
$$
\mathbb{P}(M_n\geq r, S_n=b)=\left\{\begin{aligned}
&\mathbb{P}(S_n=b),&\quad\text{if } b\geq r\\
&(q/p)^{r-b}\mathbb{P}(S_n=2r-b),&\quad\text{if } b< r
\end{aligned}\right.
$$
The first part is trivial since $M_n\geq b\geq r$. For the second part, notice that $M_n\geq r$ indicates that the path will include some points at position heighter than $r$. Suppose $(k, r)$ is the first point of such, then we can flip the path from $k\leq x leq n$ around $r$, which make a new path from $(0, 0)$ to $(n, 2r-b)$. This is true for any path satisfy $M_n\geq r$. Thus, the total number of maximum path is converted to the total number of path connecting $(0, 0)$ to $(n, 2r-b)$, which is $N_n(0, 2r-b)$. The number of steps that goes left and right are again $1/2(n+b)$ and $1/2(n-b)$. 
$$
\begin{aligned}
\mathbb(P)(M_n\geq r, S_n=b)&=N_n(0, 2r-b)p^{1/2(n+b)}q^{1/2(n-b)}\\
&=(q/p)^{r-b}N_n(0, 2r-b)p^{1/2(n+2r-b)}q^{1/2(n-2r+b)}\\
&=(q/p)^{r-b}\mathbb{P}(S_n=2r-b)
\end{aligned}
\notag
$$

### Probability of reaching new maximum at particular time

Previous problem state the probability of reaching a specific maximum during a walk $S_0=0, \cdots, S_n=b$. Now, we want to ask what is the probability that the walk reaches a new maximum at a particular time. The question is equivlent with the probabiliyty that a walk, start with 0, reaches $S_n=b$ for the firt time. This is given by
$$
P = \frac{|b|}{n}\mathbb{P}(S_n=b)\quad \text{if } n\geq 1\notag
$$


For $b>0$, notie that the problem statets is equivalent to 
$$
\begin{aligned}
P &= \mathbb{P}(M_{n-1}=S_{n-1}=b-1, S_n=b)\\
&=p\left(\mathbb{P}(M_{n-1}\geq b-1, S_{n-1}=b-1)-\mathbb{P}(M_{n-1}\geq b, S_{n-1}=b-1)\right)\\
&=p(\mathbb{P}(S_{n-1}=b-1)-(q/p)\mathbb{P}(S_{n-1}=b+1))\\
&=b/n\mathbb{P}(S_n=b)
\end{aligned}\notag
$$
The second line comes from that fact the that event $A=\{M_{n-1}=b-1\}\cap \{S_{n-1}=b-1\}\cap \{S_n=b\}$ can only happend when the previouse step is at $b-1$. Thus $\mathbb{P}(A)=\mathbb{P}(A|M_{n-1}=b-1, S_{n-1}=b-1)\mathbb{P}(M_{n-1}=b-1, S_{n-1}=b-1)$, and the conditional probablity is simply transition probability. 

## Revresal method

The reversed walk $0, R_1, \cdots, R_n$ of a random walk $0, S_1, \cdots, S_n$ is
$$
\{0, T_1, \cdots, T_n\} = \{0, X_n. X_n+X_n-1, \cdots, \sum X_i\}\notag
$$
**a diagram show the symmetry properties**. 

Notice the symmetry between the original walk and inversed walk, with $X_i$ being iid, the two walk would have identical distirbutions. 
