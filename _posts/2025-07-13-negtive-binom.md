---
layout: post
title: Negative Binomial Distribution
description: A brief note on the negative binomial distribution
date: 2025-07-13 16:00:00-0600
categories:
  - math
  - probability
tags:
  - combinatorial
---

The negative binomial distribution counts the number of Bernoulli trials at which the $r$-th success occurs. We denote the random variable $X$ as the number of trials required. Notice that when event $\{X=x\}$ occurs, the $x$-th trial should be a success and there are exactly $r-1$ successes in the first $x-1$ trials. Therefore, the probability mass function (pmf) is 

$$
\begin{aligned}
P(X=x|r,p)&=\binom{x-1}{r-1}p^{r-1}(1-p)^{x-r}\cdot p\\
&=\binom{x-1}{r-1}p^{r}(1-p)^{x-r},\quad x=r,r+1,\cdots
\end{aligned}
$$

The negative binomial is equivalently defined as the pmf of the number of failures before the $r$-th success. If $X$ is still the number of trials at which the $r$-th success occurs, the number of failures before is therefore $Y=X-r$. Thus, we find the pmf for $Y$ as

$$
P(Y=y|r, p)=\binom{r+y-1}{y}p^r(1-p)^y,\quad y=0, 1, \cdots
$$

## Sum of Probability Mass Function
The pmf we found above should satisfy the condition $\sum_xP(X=x)=1$. Therefore,

$$
\sum_{x=r}^\infty\binom{x-1}{r-1}p^r(1-p)^{x-r}=\sum_{y=0}^\infty\binom{r+y-1}{y}p^r(1-p)^y=1
$$

This sum is quite useful for some combinatorial problems, and the proof can be shown using the series expansion of $(1+x)^\alpha$. Notice that

$$
\begin{aligned}
\binom{r+y-1}{y}&=\frac{(r+y-1)(r+y-2)\cdots r}{y!}\\
&=(-1)^y\frac{(-r)(-r-1)\cdots(-r-(y-1))}{y!}
\end{aligned}
$$

Notice that this is the expansion coefficient of $(1-x)^{-r}$, which is

$$
(1-x)^{-r}=1+(-r)(-x)+\frac{(-r)(-r-1)}{2!}(-x)^2\cdots
$$

Thus, the summation is equivalent to

$$
p^r\sum_{y=0}^{\infty}\binom{r+y-1}{y}q^y=p^r\sum_{y=0}^\infty\frac{(-r)(-r-1)\cdots(-r-(y-1))}{y!}(-q)^y=p^r(1-q)^{-r}=1
$$
