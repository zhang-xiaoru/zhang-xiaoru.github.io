---
layout: post
title: Decision Tree
date: 2024-11-11 10:10:00-0600
description: Decision tree model in machine learning
tags:
  - machine learning
categories:
  - machine learning
---

## Regression Trees

Regression trees use the condition at each node to split the predictor space into different regions, represented by the leaves of the tree. The predicted response for a feature point that falls in a leaf is the average response of the training observations within that region. In principle, the regions can have any shape, but they are typically chosen as high-dimensional boxes. 

### Formulation

* Divide the $d$-dimensional predictor space, represented by data vector $\mathbf{x}=(x_1, x_2, \cdots, x_d)$, into $J$ distinct non-overlapping regions $R_1, R_2, \cdots, R_J$.

* For every observation that falls into the region $R_j$, the prediction is the same: the average of the response values for the training observations that fall in $R_j$

* The goal is to find optimized regions $\{R_i\}$ that minimize the error
  $$
  \sum_{j=1}^{J}\sum_{\mathbf{x}_i\in R_j}(y_i-\hat{y}_{R_j})^2 \notag
  $$
  where $y_i$ is the response of training data point $\mathbf{x}_i$ and $\hat{y}_{R_j}$ is the average of the training observations within $R_j$

### Optimization

Use recursive binary splitting, a top-down, greedy approach to find the minimized error.

1. For specific predictor $x_j$, split the predictor space into $R_1=\{\mathbf{x}|x_j<s_j\}$ and $R_2=\{\mathbf{x}|x_j\geq s_j\}$, and find the $s_j$ that minimizes the error.
2. Search through all predictors and find the $(x_i, s_i)$ that has the smallest error.
3. Repeat process 1, 2 for one of the split regions
4. Repeat 3 until every region contains fewer observations than a specified value



### Regularization

If the tree we generate is too big, the tree would overfit the data. However, the naive approach of simply stopping the above process early will prevent the tree from finding a possible good split in deeper tree. 

A better strategy is to grow a very large tree and then prune it back in order to obtain a subtree. 

#### Cost complexity pruning (weakest link pruning)

Rather than considering every possible subtree, cost complexity pruning uses a hyperparameter $\alpha$ to add a punishment term for size of tree in the error function. Each value of $\alpha$ corresponds to a subtree $T$ that minimizes the error function
$$
\sum_{m=1}^{|T|}\sum_{\mathbf{x}_i\in{R_m}}(y_i-\hat{y}_{R_m})^2+\alpha|T|\notag
$$
where $|T|$ represents the number of terminal nodes of the tree. 

## Classification Trees

The prediction of a classification tree is the same for every observation that falls in a given region, given by the most commonly occurring class of training observations in the region.

## Ensemble Methods for Decision Trees

An ensemble method is an approach that combines many simple weak learners to obtain a potentially very powerful model.

### Bagging 

The idea of bagging or Bootstrap aggregation is to take many training sets from the population, and build a separate prediction model for each training set. The prediction is given by the average of these models. By doing so, the variance of the statistical learning model is reduced.



In practice, instead of getting multiple training sets, people resample from the single training set, getting different bootstrapped training data sets. Suppose we generate $B$ different training sets from the original dataset; for each training set, we train the model and get a regression relationship $\hat{f}_i(\mathbf{X})$, the final model would be the average of all the predictions
$$
f_{\text{bag}} = \frac{1}{B}\sum_{i=1}^{B}\hat{f}_i(\mathbf{X})\notag
$$

* Bagging can be applied to many regression methods.
* Trees are grown using the $B$ training sets and are not pruned, since the averaging process reduces the variance. 

### Random Forests

In random forest model, a number of trees are built on bootstrapped training samples, and the overall prediction is given by the average. When building each decision tree, instead of splitting the predictor space searching through all predictors, a random sample of $m$ predictors is chosen. 

* A fresh sample of $m$ predictors is taken at each split
* Only one of the chosen predictors is used during binary splitting
* Typically with $m\approx\sqrt{d}$

The reason for such restriction on the allowed predictors used in the model is that when there is one strong predictor in the dataset, the majority of bagged trees will choose that predictor, leading to highly correlated trees. Averaging these correlated trees will not reduce the variance much. 

* A small value of $m$ is usually helpful when there is a large number of correlated predictors. 

### Boosting

Boosting involves training multiple small trees in sequence, with each fitted to the residuals of the previous tree instead of $Y$. By fitting small trees to the residuals, the boosting process slowly improves the output in areas where it does not perform well. 

1. Initialize the tree $\hat{f}(\mathbf{X})=0$ and residual $r_i=y_i$ for all i in the training set
2. Let $B$ be the total number of trees, repeat the following
   1. Fit a new tree $\hat{f}_b$ with $\mathbf{X}$ and $\mathbf{r}$
   2. Update $\hat{f}(\mathbf{X})\leftarrow\hat{f}(\mathbf{X})+\lambda\hat{f}_b(\mathbf{X})$
   3. Update residuals $r_i\leftarrow r_i-\lambda \hat{f}_b(\mathbf{x}_i)$
3. Return the boosted model $\hat{f}(\mathbf{X})=\sum_{b=1}^B\lambda\hat{f}_b(\mathbf{X})$

There are three tunable hyperparameters

* Number of trees $B$. This can be chosen by cross-validation
* Learning rate $\lambda$. Chosen depending on the problem and the number of trees
* Number of splits in each tree. 

The idea of boosting can also be applied to different machine learning methods, where each successive model learns the residuals of the previous one. 

### Bayesian Additive Regression Trees

