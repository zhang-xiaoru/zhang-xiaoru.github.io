---
layout: post
title: Negative Binomial Distribution
description: a brife note for negtivae binomial distribution
date: 2025-07-13 16:00:00-0600
categorize:
  - math
  - probability
tag:
  - combinatorial
---
# Negative Binomial Distribution

The negative binomial count the number of Bernoulli trials at which the $r$-th success occurs. If we denote random varaible $X$ as the number of trails required. Noticed that when event $\{X=x\}$ occurs, the $x$th trial should be success and there are exactly $r-1$ success in the $x-1$ trails. Therefor, the probability mass function (pmf) is 

$$
\begin{aligned}
P(X=x|r,p)&=\binom{x-1}{r-1}p^{r-1}(1-p)^{x-r}\cdot p\\
&=\binom{x-1}{r-1}p^{r}(1-p)^{x-r},\quad x=r,r+1,\cdots
\end{aligned}
$$

The negative binomial is qeuivalently defined as the pmf of specfic failures before the $r$-th success. If $X$ is still the number of trails at which the $r$-th success occurs, the number of failures before is therefor $Y=X-r$. Thus, we find the pmf for $Y$ as

$$
P(Y=y|r, p)=\binom{r+y-1}{y}p^r(1-p)^y,\quad y=0, 1, \cdots
$$

# Sum of Probability Mass Function
The pmf we found above should satisfy the condition $\sum_xP(X=x)=1$. Therefor

$$
\sum_{x=r}^\infty\binom{x-1}{r-1}p^r(1-p)^{x-r}=\sum_{y=0}^\infty\binom{r+y-1}{y}p^r(1-p)^y=1
$$

This sum is quit useful for some combinatorial problems, can the proof can be shown using the series expansion of $(1+x)^\alpha$. Noticed that 

$$
\begin{aligned}
\binom{r+y-1}{y}=\frac{(r+y-1)(r+y-2)\cdots r}{y!}\\
=(-1)^k\frac{(-r)(-r-1)\cdots(-r-(y-1))}{y!}
\end{aligned}
$$

NOticed that this is the expansion coefficient of $(1-x)^{-r}$, which is

$$
(1-x)^{-r}=1+(-r)(-x)+\frac{(-r)(-r-1)}{2!}(-x)^2\cdots
$$

thus, the sumation is equivalent 

$$
p^r\sum_{y=0}^{\infty}\binom{r+y-1}{y}q^y=p^r\sum_{y=0}^\infty\frac{(-r)(-r-1)\cdots(-r-(y-1))}{y!}(-q)^y=p^r(1-q)^{-r}=1
$$