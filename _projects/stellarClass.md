---
layout: page
title: Classifying Stellar Multiplicity 
description: Using machine learning methods predict the star formation
img: assets/img/projects/stellarClass/stellar_cover.jpg
#importance: 1
#category: 
pretty_table: true
toc:
  beginning: true
related_publications: false
---
## Star Formation and Stellar Multiplicity
<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/stellarClass/star_form.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <p>Stars form when overdense regions of molecular (hydrogen gas) clouds contract due to gravity and reach temperatures capable of sustaining hydrogen fusion. Turbulence, magnetic fields, and stellar feedback complicate the dynamics of star formation. Star formation is a highly nonlinear process with a large dynamic range.</p>
    </div>
</div>

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        <p>In the end, the concentration of gas will be dense enough to form start. In reality, most start from in gravitationally-bound systems composed of multiple starts. The number of stars that are bounded is referred as multiplicity</p>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/stellarClass/star_form2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>

</div>

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/stellarClass/star_form3.png" title="example image" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Grudić et al. (2021) 
        </div>
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        <p>The formation process can be modeled  by composing a multiphysic process with fluid dynamics in magnetic fields+gravity+radiative transfer+chemical evolution+etc</p>
        <p> The formation process can be modeled with coupled partial differential equations and solved numerically. However, finding the final stage of star formation through numerical solver is computationally expensive since the entire evolution of cluster is need to be computed. </p>
    </div>
</div>

In this project, we used machine classification methods to predict the stellar multiplicity from various physical properties of gas cluster of numerical simulation data.

## Date Preparation and Preprocessing
### Feature extraction
The simulation data we used contains evolutionary process of $N_\mathrm{star}=212$ stars, each with 14 different gas properties. We constructed the data vector $\mathbf{x}$ representing each start system by selected fixed number of points in time with equal separation as the feature. The following figure shows the feature extraction from the evolutionary of various gas properties

<div class="row">
    <div class="col-sm-6 offset-md-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/stellarClass/processed_data.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The labels are create for each star according to their multiplicity. We set up two different prediction task:
* Binary classification where labeling as just 'single' vs. 'multiple'
* Full classification on all multiplicity with labeling from 1 though 4

### Dataset preparation
The quick examine on the data deistibution shows strang skewness in the data. The power transform and standardization are performed on data to remove the skewness.
<div class="row">
    <div class="col-sm-8 offset-md-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/stellarClass/row_data.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


The dataset is then splited into training and testing set with 7:3 ratio. 

### Cluster properties in high dimension
We visualized the cluster properties of the high dimension data using its first 4 principle componenets

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/stellarClass/PCA_30_2class.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/stellarClass/PCA_30_4class.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Visualizing data clustering in first 4 principle components with 2 labels and 4 labels. The number of points selected from evolutionary data is 30. 
</div>

Noticed that no strong linear seperability presented from the plot, meaning an nonlinear methods will be prefered

## Kernelized-SVM Classification
The SVM classification framwork is shown as below

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/stellarClass/SVM_schem.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

To encouperate nonlinearity, we selected radial basis function kernel

$$
K(\mathbf{x},\mathbf{x}^\prime)=\exp{(-\gamma\|\mathbf{x}-\mathbf{x}^\prime\|^2)}
$$

with soft margin

$$
L=\frac{1}{2}\|\mathbf{w}\|^2+C\sum_i\xi_i +\sum_i\lambda_i(y_i(\mathbf{w}\cdot\mathbf{x}+b)-1+\xi_i)
$$

### Result
The following figures shows the classification result using 30 time point on both binary and full multiplicity.

<div class="row">
    <div class="col-sm-8 offset-md-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/stellarClass/SVM_30_2class.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<dic class="row">
    <div class="col-sm-8 offset-md-2 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/stellarClass/SVM_30_4class.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The test set prediction accuracy reaches 75% and 72% for binary and multiclass classification. 

We tune the hyperparameter $C$ and $\gamma$ usiang cross validation and randomized search. For different sampled point number, we obtained the test set accuracy for binary classification

|$N_{\mathrm{sample}}$|1|5|10|20|30|50|
|:-|:-:|:-:|:-:|:-:|:-:|:-:|
|Best $C$|4.0|6.0|6.5|1.8|5.0|9.5|
|Best $\gamma$|scale|0.003|0.005|0.001|0.001|0.001|
|Accuracy|70%|69%|77%|69%|73%|75%|

and for multiclass case

|$N_{\mathrm{sample}}$|1|5|10|20|30|50|
|:-|:-:|:-:|:-:|:-:|:-:|:-:|
|Best $C$|9.7|8.6|4.9|4.3|3.4|2.0|
|Best $\gamma$|scale|0.05|0.005|0.004|0.003|0.002|
|Accuracy|64%|63%|73%|70%|69%|72%|

## Acknowledgement
We thank Nina Filippova on collaborating this project.
