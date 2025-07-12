---
layout: post
title: Decision Tree
date: 2024-11-11 10:10:00-0600
description: Decision tree model in machine learning
tags:
  - machine Learning
categrories:
  - mcahine Learning
---

# Regression Trees

The regression trees use the condition on each node to split the predictor space into different region, representing by the leaves of the tree. The predicted mean of the response for a feacture point fall in the leave is given by the responbse average of traning observation within the region.  In principle, the shape of the region can be airbutreary, but are typically troches as high-dimensional boxes. 

## Formulasime

* Divide the $d$ dimensional predictor space repressenting by data vector $\mathbf{x}=(x_1, x_2, \cdots, x_d)$, into $J$ distinct non-ocerlaping regions $R_1, R_2, \cdots, R_J$.

* For every observation that falls into the region $R_j$, the prediction is same, which is the average of the response value for the traning objercation fall in $R_j$

* The goal is to find optimized regions $\{R_i\}$ that minimized the error
  $$
  \sum_{j=1}^{J}\sum_{\mathbf{x}_i\in R_j}(y_i-\hat{y}_{R_j}) \notag
  $$
  where $y_i$ is the reponse of train data point $\mathbf{x}_i$ amd $\hat{y}_{R_j}$ is the average of traning observation within $R_j$

## Optimization

Use recursive binary splitting, a top-down, greedy approach to find the minimized error.

1. For specific predictor $x_j$, splite the predictor space in to $R_1=\{\mathbf{x}|x_j<s_j\}$ and $R_2=\{\mathbf{x}|x_j\geq s_j\}$, and find s that minimized the error.
2. Search thorugh all predictors and find the $(x_i, s_i)$ that has the smallest error.
3. Repeat process 1, 2 for one of the splited region
4. Repeat 3 until all region contains observations less than specific value



## Regularization

If the tree we generate is too big, the tree would overfit the data. However, the naive approach simply stop the above process early will prohibite the tree to find a possible good split in deeper tree. 

A better strategy is to grow a very large tree and then prune it back in order to obtain a subtree. 

### Cost complexity pruning (weakest link pruning)

Rather than consideirng every possible subtree, the cost complexity pruning use a hyperparameter $\alpha$ to add a punishment term for size of tree in the error function. For each value of $\alpha$ corresponds a subtree $T$ that minimized the error function
$$
\sum_{m=1}^{|T|}\sum_{\mathbf{x}_i\in{R_m}}(y_i-\hat{y}_{R_i})+\alpha|T|\notag
$$
where |T| represent the number of terminal nodes of the tree. 

# Classification Trees

The prdiction of an classification trees is same for each observation fall in the splited predictor space region, given by the most commonly occurring class of traning obsercations in the region.

# Ensemble Method for Decistion Trees

An ensemble method is an approach that combines many simple weak learning to obtain a potentially very powerful model.

## Bagging 

The idea of bagging or Bootstrap aggregation is to take many traning sets from the population, and buid separte drecition modesl using for each traning set. The prediction is given by the avrageds of these model. By doing such,  the variacne of the statistical learning model is reduced.



In practice, instead of getting multiple traning set, people resample from the single training set, getting different bootstrapped traning data set. Suppose we enerate $B$ different traning sets from the original datastes, for each traning sets, we traning the model and get a regression relationship $\hat{f}_i(\mathbf{X})$, the final model would be the average of all the predictions
$$
f_{\text{beg}} = \frac{1}{B}\sum_{i=1}^{B}\hat{f}_i(\mathbf{X})\notag
$$

* Bagging can be applied to many regression methods.
* Trees are growning using $B$ traning set, and are not pruned. Since the averaging process will reduces the variance. 

## Random Forests

In random forest model, numbers of trees are duilded on bootstrapped traning smaples, and the overall prediction is given by the average. When building each decision trees, instead of splitting the predictor space searching through all predictors, a random sample of $m$ predictors is chosen. 

* A fresh sample of $m$ predictors is taken at each split
* Only one of the chosen predictors is used during binary splitting
* Typically with $m\approx\sqrt{d}$

The reason for such restriction on the allowed predictors used in the model is that when there is one strong predictor in the dataset, the majority of bagged trees will choose that predictors, leading to highly correlated tress. Averaging these correlated tress will not reduced the varaince much. 

* Small value of m is usually helpful when there are large number of correlated predictors. 

## Boosting

The boosting envolves traning multiple small tress in seuqnce, with each fited with the residuals of previouse tree instead of $Y$. By fitting small trees to the residuals, the boosting process slowly imporve the output in areas where it does not perform well. 

1. Initilize the tree $\hat{f}(\mathbf{X})=0$ and residual $r_i=y_i$ for all i in the traning set
2. Let $B$ be the total number of trees, repeat the following
   1. Fit a new tree $\hat{f}_b$ with $\mathbf{X}$ and $\mathbf{r}$
   2. Update $\hat{f}(\mathbf{X})\leftarrow\hat{f}(\mathbf{X})+\lambda\hat{f}_b(\mathbf{X})$
   3. Update residuals $r_i\leftarrow r_i-\lambda \hat{f}_b(\mathbf{x}_i)$
3. Return the boosted model $\hat{f}(\mathbf{X})=\sum_{b=1}^B\lambda\hat{f}_b(\mathbf{X})$

there are three tunable hyperparamters

* Number of trees $B$. This can be chose by cross-validation
* Learning rate $\lambda$. Chose depend on problem and number of trees
* Number of splits in each tree. 

The idea of boosting can also be applied to different machine learning methods, where the successive model learn the residule of the previouse one. 

## Bayesian Additive Regression Trees

