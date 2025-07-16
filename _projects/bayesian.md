---
layout: page
title: Bayesian method on modeling commuting transportation choice
description:
  - description 1
  - description 2 
img: assets/img/projects/bayesian/bayesian_cover.jpg
importance: 1
#category: work
related_publications: false
toc:
  sidebar: left
pretty_table: true
---

# Introduction

# Dataset

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
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/bayesian/alpha_tp.png" title="trace plot alpha" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Violin plot for all posterior distribution
</div>


Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
