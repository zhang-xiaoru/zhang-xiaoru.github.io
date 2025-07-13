---
layout: post
title: Cross Validation For Time Series Data
date: 2024-11-24 15:04:00-0600
description: how to perform cross validation for time sequence data
categories:
  - tech
tags:
  - machine learning
  - time series
---

The usual case of cross-validation with random samples is not suitable for time series data since the shuffling process will include future data to forecast values in the past. 

One of the way to make corss validation set for time series data is to chose segments of series as different traning sets. he successive traning sets need to be supersets of those that come beofre. Then select the following piece of sereis  of the  traning set as the vlidation set. 

Example using `sklearn.model_selection.TimeSeriesSplit`

```python
import numpy as np
from sklearn.model_selection import Time SeriesSplit

# Create series dataset
X = np.arange(1, 21)

# Create 5 fold spliting
tscv = TimeSeriesSplit(n_splits=5)

# print the split result
for i, (train_index, test_index) in enumerate(tscv.split(X=X)):
    print(f"Split {i}")
    print(f"Train indices: {train_index}")
    print(f"Test indices: {test_index}")
```

`TimeSeriesSplit` takes serval parameters:

* `n_split`: number of splits
* `max_train_size`: maximum size of a single traning set, `default=None`
* `test_size`: size of the test set, `default=None`. If `default`, the isze of test set is `n_samples // (n_splits + 1)`, which is maximum test size with `gap=0`
* `gap`: Number of samples excluded after and before the train set and test set

`split` method returns a iterator for generated indices for each splited traning and test set

* `X`: array-like of shape (n_samples, n_features), where n_sample is number of samples and n_features is the number of features.
* `y`: `defualt=None`
* `group`: `defult=None`

