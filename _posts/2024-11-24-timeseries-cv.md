---
layout: post
title: Cross Validation For Time Series Data
date: 2024-11-24 15:04:00-0600
description: How to perform cross-validation for time series data
categories:
  - tech
tags:
  - machine learning
  - time series
---

The usual case of cross-validation with random samples is not suitable for time series data since the shuffling process will include future data to forecast values in the past. 

One way to make cross-validation sets for time series data is to choose segments of the series as different training sets. The successive training sets need to be supersets of those that come before. Then select the piece of the series that follows each training set as its validation set. 

Example using `sklearn.model_selection.TimeSeriesSplit`

```python
import numpy as np
from sklearn.model_selection import TimeSeriesSplit

# Create series dataset
X = np.arange(1, 21)

# Create 5-fold splitting
tscv = TimeSeriesSplit(n_splits=5)

# print the split result
for i, (train_index, test_index) in enumerate(tscv.split(X=X)):
    print(f"Split {i}")
    print(f"Train indices: {train_index}")
    print(f"Test indices: {test_index}")
```

`TimeSeriesSplit` takes several parameters:

* `n_splits`: number of splits
* `max_train_size`: maximum size of a single training set, `default=None`
* `test_size`: size of the test set, `default=None`. If `None`, the size of test set is `n_samples // (n_splits + 1)`, which is maximum test size with `gap=0`
* `gap`: number of samples to exclude from the end of each training set before the test set

The `split` method returns an iterator over the generated indices for each training/test split

* `X`: array-like of shape (n_samples, n_features), where n_sample is number of samples and n_features is the number of features.
* `y`: `default=None`
* `groups`: `default=None`

