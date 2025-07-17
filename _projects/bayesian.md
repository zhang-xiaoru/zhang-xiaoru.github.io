---
layout: page
title: Predicting Commuting Transportation Choice
description:
  - Logistic regression with hierachical Bayesian model. Implemented in R with JAGS packges. COurse project for SDS384-7 Bayesian Statistical Methods.
img: assets/img/projects/bayesian/bayesian_cover.jpg
importance: 1
#category: work
related_publications: false
pretty_table: true
toc:
  beginning: true
---

# Introduction
Individuals choice of transportation methods, such as car, transit, rail, share-ridding etc, is related to various characteristic (cost of different transportation methods, distance, etc). The interest lies in the ability to predict individual's choice of transportation methods based on their characteristic. This prediction task is equivalent as a binary or multicast classification problem. In this project, we create a Bayesian multi linear regression model to predict the individual choice of transportation methods. We create a hierarchical structure to allow randomness in the parameters with the idea to accommodate mechanisms in the underlying process.
# Dataset
The dataset used in this project is a random sample of 543 individual workers in the Boston Metropolitan area. The prediction variable we use are
* TC_CAR: Travel cost associated with car
* TC_TR: Travel cost associated with public transit
* TT_TR: Total travel time in car
* OVTTRDI: Overvechical transportation time in public transit per distance
* NUMVEH: Number of vechos within household
* INCOME: Annual household income

The response varaible we wish to predict with the model is 
* Commuting choice: 1 for driving; 0 for public transit

We wish to investige the grouping effect of household income on family level prediction variables such as number of car own. The income group is set up with the following descriptive table. Low income $\leq$ \\$50000; Medium income \\$50001-\\$1000000; High income $>$ \\$100000.

|Mode |  Low          | Medium        |         High |
|:--- | :-----------: |:-------------:|-------------:|
|DA   | 103 (85.12 %) | 149 (87.65 %) | 217 (86.11 %)|
|TR   | 18 (14.88 %)  | 21 (12.35 %)  | 35 (13.89 %) |

<div class="caption">
    Descriptive table for income level grouping.
</div>

In the project, the number of bechos are grouped with different income level. The income level is setted from the annual income with Low incom
# Bayesian Model Set Up
The porposed Bayesian Model start with the data dsitribution. I use a simple approch where the decsistion is given by Bernoulli distribution with probability of sucess $p_{ij}$

$$
y_{ij}\sim Bern(p_{ij}), \quad i=1,\cdots,N,\quad j=1, 2, 3.
$$

Here, the $i$ stands for the index of each data (individual) and $j$ represent different income group. The success probability $p_{ij}$ is linked with regressive variables through a logit link function as

$$
\begin{gather*}
\mathrm{logit}(p_{ij})=\mu_{ij}\\
\mu_{ij}\sim\mathrm{N}(\mathbf{A}^T_{i}\boldsymbol{\alpha}+\mathbf{D}^T_{ij}\boldsymbol{\beta}_{j},\sigma^2).
\end{gather*}
$$

Noticed that a normal distribution is used to introduce the random ness in the general linear model (the larger the linear regression give only means the sucess probability will have higher chance to be larger). $\mathbf{A}^T_{i}$ is the matrix of covariates associated with the *alternatives*, whereas $\mathbf{D}^T_{ij}$ concerns the matrix of covariates associated with the *individual's characteristics*, grouped by their respective income $j$. Notice that while the parameter $\alpha$ is fixed, whereas $\beta_{j}$ is allowed to vary based capturing the random effect of the income levels. This set up should allow us to investigate if the decision-maker's parameters for the utility of commuting by car is affected differently according to their income. The prior distribution is assume to be as follow

$$
\begin{gather*}
\alpha_{l}\sim\text{N}(\mu_{\alpha,l},\sigma^2_{\alpha,l}), \quad l=1,...,L\\
\beta_{k,j}\sim\text{N}(\boldsymbol{\mu}_{\beta}, \boldsymbol{\sigma^2}_{\beta}),\quad k=1,...,K\\
\mu_{\alpha,l}\sim\text{N}(\mu_{0}, \sigma^2_{0})\\
\sigma^2_{\alpha}\sim\text{IG}(q_{\alpha},r_{\alpha})\\
\mu_{\beta,j}\sim\text{N}(\mu_{\beta_{0}}, \sigma^2_{\beta_{0}})\\
\mu_{\beta_{0}}\sim\text{N}(\mu_{0}, \sigma^2_{0})\\
\sigma^2_{\beta,j}\sim\text{IG}(q_{\beta},r_{\beta})\\
\sigma^2\sim\text{IG}(q,r),\\
\end{gather*}
$$

To find posterior distribution, we set up Markov Chain Monte Carlo (MCMC) sampling using JAGS package. The MCMC is set with 50000 iterations, and burn-in period of 10000 iterations. The trace plots below demonstrate the convergence of the chain.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/bayesian/alpha_tp.png" title="trace plot alpha" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/bayesian/beta_tp.png" title="trace plot beta" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Trace plot for regression parameters, showing the convergence of the chain
</div>

# Result and prediction
## Posterior Distribution
Using the MCMC sampling, we were able to obtained the posterior distribution for all the regressive parameters and the corresponding marginal distribution. The mean, standard deviation and 95% credible interval for each parameter is shown in the table below.
 
| Description  |    Parameter  | Estimate | Std.Error | 2.5% - 97.5% CI |
| :----------- | :-----------: | :------: |:---------:| ---------------:|
|ASC           | $\alpha_0$    | 3.347    | 0.878     | [1.733, 5.184]  |
|TC\_CAR       | $\alpha_1$    | -1.828   | 0.300     | [-2.508, -1.324]|
|TC\_TR        | $\alpha_2$    | 1.472    | 0.588     | [0.375, 2.604]  |
|TT\_TR        | $\alpha_3$    | 2.126    | 0.599     | [1.117, 3.432]  |
|OVTIRDI       | $\alpha_4$    | 2.650    | 0.836     | [1.159, 4.479]  |
|NUMVEH\_LOW   | $\beta_{1,1}$ | 0.691    | 0.349     | [0.032, 1.392]  |
|NUMVEH\_MED   | $\beta_{2,1}$ | 0.791    | 0.312     | [0.218, 1.432]  |
|NUMVEH\_HIGH  | $\beta_{3,1}$ | 1.078    | 0.456     | [0.359, 2.153]  |

<div class="caption">
    Table for descriptive value of posterior distribution
</div>
The posterior distribution can also be visually inspect through violin plot.
<div class="row">
    <div class="col-sm-6 offset-md-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/bayesian/violin_scaled.png" title="trace plot alpha" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Violin plot for all posterior distribution
</div>

## Posterior prediction

Based on the MCMC, it is able to give posterior prediction result.

First we visualized the posterior prediction by ploting the prediction curves of the Bernoulli coefficient $p_i$ for three different income groups along with their corresponding 95\% CI. Notice that the posterior predictive mean probability of an individual choosing CAR mode aligns with the observed data distribution.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/bayesian/post_pred1_scaled.png" title="trace plot alpha" class="img-fluid rounded z-depth-1" %}
    </div>
        <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/bayesian/post_pred2_scaled.png" title="trace plot alpha" class="img-fluid rounded z-depth-1" %}
    </div>
        <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/bayesian/post_pred3_scaled.png" title="trace plot alpha" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Due to the high-dimensional nature of the predictions, it is difficult to visualize change in the posterior predictive variable across the full range of predictor values. Therefore, the posterior predictive mean and CI were calculated along a specific line in the predictor space. 

The Receiver Operating Characteristic (ROC) plot was used to evaluate the performance of the proposed Bayesian model. The ROC curve displays the True Positive Rate versus the False Positive Rate across various classification thresholds, where each threshold determines the class based on the predicted probability.

In a ROC plot, a perfect model is represented by a curve hugging the top-left corner, as it would achieve a True Positive Rate of 1 and a False Positive Rate of 0. A random model (i.e., guessing the outcome) would follow the diagonal line. Therefore, the closer the curve is to the top-left corner, the better the model's performance. The ROC plot for the proposed model shows a curve close to the top-left corner, indicating good predictive ability.

<div class="row">
    <div class="col-sm-6 offset-md-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/bayesian/roc_scaled.png" title="trace plot alpha" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Receiver Operating Characteristic for proposed Bayesian mode
</div>
 
 More specifically, the model prediction reach accruacy of 93% accuracy when the threshold is 0.5 (i.e. $>$ 0.5 predict label as 1; $\leq$ 0.5 predict as 0).
