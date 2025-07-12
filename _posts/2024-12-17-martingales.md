---
layout: posts
title: Martingales
date: 2024-12-17 13:20:00-0600
description: a short intro to martingales
tags:
  - random process
categories:
  - probability
  - statistics

---

The conecpt of martingales arise from fair games in gambling. Suppose a gambler with initial capital $S_0$ repeatedly playing a game. Let $\{S_n\}$ be the sequence representing his caotial after each play. The gambler know the exact values of $S_0,S_1\cdots, S_n$ before $n+1$ game, but can only guess at the future games. If the game is fair, the gambler would expect no change in his present capital on average, no matter what past information he got. 
$$
E(S_{n+1}|S_0, S_1, \cdots, S_n) = S_n\notag
$$
Random sequence satisified the above relation are called 'martingales'. 

# Martingales

A sequence $S=\{S_n:n\geq 0\}$ is called a **martingale** with respecto to the sequence $X=\{X_n:n\geq0\}$ if for all $n\geq0$

* $E|S_n|<\infty$
* $E(S_{n+1}|X_0, X_1, \cdots, X_n)=S_n$

The conditional expecatation of $Y$ given $X$ denoted as $E(Y|X)$ is defined as
$$
E(Y|X)=\int_{-\infty}^\infty yf_{Y|X}(y|X)\mathrm{d}y\notag
$$
where $f_{Y|X}(y|x)=\frac{f(x, y)}{f_X(x)}$ is the conditional density function.

The definition of martingale here is introduce sequence $\{X_n\}$ since in cases, the sequence it self may not be a martingale, while it is possible to find some function $\phi$ s.t. $\{S_n=\phi(X_n):x\geq1\}$ is a martingale. 