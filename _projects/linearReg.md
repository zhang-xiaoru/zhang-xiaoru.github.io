---
layout: page
title: Impact of Financial Indicators on Stock Market Performance
# description: Course final project for 
img: assets/img/projects/linearReg/linearReg_cover.png
#importance: 1
#category: work
related_publications: false
pretty_table: true
toc:
  beginning: true
---
## Introduction
Stock price variance is an important indicator to evaluate a company’s performance,
and has been widely used for participants from institutional investors and individual traders to construct portfolios. The performance of a company is usually related to various financial indicators, and finding financial indicators as good predictors of stock price movement is of great interest. Due to the complex and volatile nature of the financial market, a statistical method is often preferred. The purpose of this study is to analyses the relationship between different financial indicators and the stock price variance and quantify the result with statistical methods. Every project has a beautiful feature showcase page.

## Dataset Description
In this project, we investigated the public traded companies in the U.S. stock market in 2018. Due to the scope of the project, only a partial of the companies are included. We selected 6 different financial indicators as predictor varaibles
* Revenue growth [%]: A numerical varaible describing the increase in a compan

* Revenue growth [%]: A numerical variable describing the increase in a company's income generated.
* Gross profit [\\$]: A numerical variable describing the amount a company makes after deducing the direct cost associated with producing its goods from revenue. 
* R&D expense [\\$]: A numerical variable describing the costs a company incurs in its research and development activities. 
* SG&A expense [\\$]: A numerical variable describing the cost a company incurs in its selling, general, and administrative expenses. 
* Total asset [\\$]: A numerical variable describing the total value of everything the company owns that can provide future economic benefits. 
* Sectors: A categorical variable stating which sector the company at the stock market. 

    |Sectors|Tech | HC | IND | BaM |  CC | CSP | Ene |  CD |  FS | Total|
    |:-     | :-: | :-:| :-: | :-: | :-: | :-: | :-: | :-: | :-: |  -:  |
    | Count | 177 | 138|  37 | 24  | 20  |  7  |  6  |  4  |  3  |  416 |

* 5Y dividend per share: A categorical variable stating whether the company has increased 5Y dividend per share.

    |5 year dividend per share|  Increase | Decreased |  Total |
    | :---------------------: | :-------: | :-------: | :----: |
    |          Count          |     30    |    386    |   416  |

The response variable we wish to predict is
* 2019 Price Variance [%]: A numerical variable representing the percentage change of stock market price during 2018-2019 with respect to the price in 2018.

### Descriptive Analysis
We start the descriptive analysis examine the distribution of all the numerical variables. The following figures shows the histogram of all the numerical variable used. **2019 Price Var is the response variable** in used while all the rest are the numerical predictors.

<div class="row">
    <div class="col-sm-6 offset-md-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/linearReg/hist_numerical.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Histogram of numerical variables.
</div>

From the histogram we observed that the numerical data we have are all asymmetric and skewed, showing deviation from assumed normal distribution in linear regressive analysis. This might cause the poor predictability of the model and will be discusses further later. The following table shows in detail the descriptive statistics of the numerical variable. 

|     Variable      |  n  |   Min  |   Max  | Mean |   SD  |
|:----------------- |:---:|:------:|:------:|:----:|------:|
|2019 price var [%] | 416 | -98.86 | 308.82 | 202  | 70.98 |
|Revenue growth [%] | 416 | -0.25  | 0.249  | 03   |  0.12 |
|Gross profit [\\$] | 416 | 1.60e4 | 3.66e8 | 14e7 | 7.76e7|
|R&D expense [\\$]  | 416 | 1.07e5 | 1.45e8 | 70e7 | 3.07e7|
|SG&A expense [\\$] | 416 | 1.30e6 | 1.86e8 | 98e7 | 4.60e7|
|Total assets [\\$] | 416 | 3.85e6 | 9.98e8 | 44e8 | 2.43e8|

<div class="caption">
    Descriptive statistics for numerical variables
</div>

For the categorical varaible, the describte analysis is shown in the following table

|5Y dividend per share|n|Count|%|
|:--------------------|:-:|:-:|-:|
|Increased| 416|30|7.21|
|Decreased|416|386|92.72|

<div class="caption">
    Descriptive statistics for Increasing 5Y dividend per share
</div>

and

|Sectors|  n  |Count|   %  |
|:------|:---:|:---:|-----:|
|  Tech | 416 | 177 | 42.55|
|  HC   | 416 | 138 | 33.17|
|  Ind  | 416 |  37 |  8.89|
|  BaM  | 416 |  24 |  5.77|
|  CC   | 416 |  20 |  4.81|
|  CSP  | 416 |  7  |  1.68|
|  Ene  | 416 |  6  |  1.44|
|  CD   | 416 |  4  |  0.96|
|  FS   | 416 |  3  |  0.72|

<div class="caption">
    Descriptive statistics for Sector variable
</div>

### Variable Relationships
The following figures shows the scatter plot hows the scatter plot between the response variable and two categorical variables.

<div class="row">
    <div class="col-sm-6 offset-md-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/linearReg/scatter_categorical.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Scatter plot between response variable and categorical predictors.
</div>

The scatter between the response variable and all numerical predictors shows a positive relation between Price variance and Gross profit, R\&D expenses, SG\&A expenses, and Total assets, while the scatter plot doesn't show a strong relation between Price variance and Revenue growth. 

<div class="row">
    <div class="col-sm-6 offset-md-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/linearReg/scatter_numerical.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Scatter plot between response variable and  numerical predictors
</div>

The following demonstrate the correlation matrix of all numerical variables. Notice that the correlation between (Gross profit, SG\&A expenses), (Gross profit, Total assets), and (Total assets, SG\&A expenses) is large.

<div class="row">
    <div class="col-sm-6 offset-md-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/linearReg/corr_numerical.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Correlation matrix between all numerical variables. 
</div>

This indicates those variables are highly correlated and there exists a hidden relationship between them. Therefore, multicollinearity is presented with the predictors in use. When the Gross profit is already in the mode, adding SG\&A expenses and Total assets as additional predictors will not greatly improve the variation explained by the model. It is necessary to perform a model selection procedure in order to remove the redundant predictors. 

## Regression Analysis
### Model Selections
Before starting the model selection procedure, we noticed that Gross Profit, R\&D Expenses, SG\&A Expenses, and Total Assets can not be 0. The intercept we get from the linear model would be meaning less in this case. We therefore center them so that we can interpret the intercept as the response value when each predictor is at their mean value.

We then perform the model selection procedure using the 'step' function in R. The direction parameter is set as 'both' to allow variables to enter or leave the model at every step. The procedure results in a linear regression model with R\&D expenses as the only predictor, with  coefficients

$$
    \hat{Y} = 25.23 + 1.47\times10^{-7}\text{R\&D Expense}
$$

Even though the selection process has shown no significant linear relation between the response and all the other predictors, to proceed with the project within the scope of the course, we will add 5Y dividend per share as additional predictors and construct the final linear model as

$$
Y = \beta_0 + \beta_1X_1+\beta_2X_2+\beta_{12}X_1X_2+\epsilon
$$

where $Y$=2019 Price Var, $X_1$=R\&D Expenses, and $X_2$=5Y Dividend per Share. $\epsilon$ is the normal constant variance error term. Fitting the model show the estimated coefficient

$$
\hat{Y} = 25.19 + 1.36\times10^{-7}X_1 + 4.86X_2+3.23\times10^{-7}X_1X_2
$$

The blow figure shows the scatter plot between responses and predictors, as well as the fitted regression line. 

<div class="row">
    <div class="col-sm-6 offset-md-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/linearReg/fit_scatter.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Scatter plot with regression line for companies with 5Y Dividend per share status
</div>

### Diagnostics
After constructing the regression model, we proceed with diagnostics on testing the assumptions. We start with diagnostics analysis with residual graphs. Below show the residual plot against numerical predictor and fitted values. 

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/linearReg/res_pred.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/linearReg/res_fit.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Residual plot against numerical predictors and fitted values.
</div>

From the residual plot, we notice that despite the residuals do not vary in a systematic fashion, they show strong cluster behavior. This may also indicate the departure from linearity. Both figures show a very strong decreasing trend in residuals, meaning that the constant variance assumption might also be violated.

We perform the Brown-Forsythe test to test the constant error variance formally. The null and alternative hypotheses in used are

<div style="overflow-x: auto; max-width: 100%;">
$$
    H_0:\text{Error variance is constant}, \quad H_a:\text{Error variance is not constant}
$$
</div>

and student t test is used as test statistics. The test result is shown in the following table. 

|Test statistics | p-value |
|:--------------:|:-------:|
|     0.90       |   0.37  |

<div class="caption">
    Result for Brown-Forsythe test
</div>

We therefore fail to reject $H_0$ of constant error variance and conclude that there is no significant violation of constant variance from the data. 

Next, we examine the independence between error terms using a sequential plot of the residuals. Following shows the residuals plotted as sequence data. The residuals are distributed randomly around 0 and no visible pattern is observed, showing a good independence between the error terms. 

<div class="row">
    <div class="col-sm-6 offset-md-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/linearReg/res_seq.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Sequential plot of the residuals plot
</div>

Since our data is originally strongly effected by the outliers, we therefore use a semistudentized residual plot to further check the effect or outliers in the model. Figure.\ref{fig2-8} shows the semistudentized residual plot, the dashed line represents 4 standard deviations away from the mean 0.

<div class="row">
    <div class="col-sm-6 offset-md-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/linearReg/sem_seq.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Semistudentized residual plot
</div>

Noticed that most residuals are within 4 standard deviation distance from mean 0 with one exception. However, the exceptional point is very close to the boundary line, we therefore conclude that no outlier was observed in the model.

At last, we examine visually the normality or error term using a quantile-quantile (Q-Q) plot.

<div class="row">
    <div class="col-sm-6 offset-md-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/linearReg/norm.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Q-Q plot for testing normality
</div>

The Q-Q plot suggested that the error distribution is not normal, and skewed right. To obtained a more quantitative inference about the normality of the residue, we then perform the Anderson-Darling test to test the normality of the error term formally. The null and alternative hypotheses are

<div style="overflow-x: auto; max-width: 100%;">
$$
    H_0:\text{Error distribution is normal}, \quad H_a:\text{Error distribution is not normal} 
$$
</div>

and the result of the test is given in Table.\ref{tab2-8}.

|Test statistics |      p-value         |
|:--------------:|:--------------------:|
|     8.80       | $p<2.2\times10^{-16}$|

<div class="caption">
    Result for Anderson-Darling test
</div>

We therefore reject $H_0$ and conclude that there is significant evidence to conclude the error distribution is not normal. 

Since we have obvious non-normality in the error and non-significant unequal variance, performing a transformation on Y such as log transformation or another autonomous transformation technique such as Box-Cox procedure might be useful. 