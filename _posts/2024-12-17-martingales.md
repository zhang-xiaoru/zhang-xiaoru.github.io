---
layout: post
title: Martingales
date: 2024-12-17 13:20:00-0600
description: A short intro to martingales
tags:
  - random process
categories:
  - probability
  - statistics

---

The concept of martingales arises from fair games in gambling. Suppose a gambler with initial capital $S_0$ repeatedly plays a game. Let $\{S_n\}$ be the sequence representing his capital after each play. The gambler knows the exact values of $S_0,S_1\cdots, S_n$ before the $(n+1)$-th game, but can only guess at the future games. If the game is fair, the gambler would expect no change in his present capital on average, no matter what past information he got. 
$$
E(S_{n+1}|S_0, S_1, \cdots, S_n) = S_n\notag
$$
Random sequences satisfying the above relation are called 'martingales'. 

## Martingales

A sequence $S=\{S_n:n\geq 0\}$ is called a **martingale** with respect to the sequence $X=\{X_n:n\geq0\}$ if for all $n\geq0$

* $E|S_n|<\infty$
* $E(S_{n+1}|X_0, X_1, \cdots, X_n)=S_n$

The conditional expectation of $Y$ given $X$ denoted as $E(Y|X)$ is defined as
$$
E(Y|X)=\int_{-\infty}^\infty yf_{Y|X}(y|X)\mathrm{d}y\notag
$$
where $f_{Y|X}(y|x)=\frac{f(x, y)}{f_X(x)}$ is the conditional density function.

The definition of a martingale here introduces the sequence $\{X_n\}$ since, in some cases, the sequence itself may not be a martingale, while it is possible to find some function $\phi$ s.t. $\{S_n=\phi(X_n):n\geq1\}$ is a martingale.