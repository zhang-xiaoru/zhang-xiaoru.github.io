---
layout: page
title: Classifying Stellar Multiplicity 
description: Using machine learning methods predict the star formation
img: assets/img/projects/stellarClass/stellar_cover.jpg
#importance: 1
#category: 
related_publications: false
---
## Star Formation and Stellar Multiplicity
{% capture content %}
    Stars form when overdense regions of molecular (hydrogen gas) clouds contract due to gravity and reach temperatures capable of sustaining hydrogen fusion. Turbulence, magnetic fields, and stellar feedback complicate the dynamics of star formation. Star formation is a highly nonlinear process with a large dynamic range.
{% endcapture %}
<div class="row">
    <div class="col-sm mt-6 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/stellarClass/star_form.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-6 mt-md-0">
        {{content | markdownify}}
    </div>
</div>

{% capture content %}
    In the end, the concentration of gas will be dense enough to form start. In reality, most start from in gravitationally-bound systems composed of multiple starts.

    The formation process can be modeled  by composing a multiphysic process with fluid dynamics in magnetic fields+gravity+radiative transfer+chemical evolution+etc
{% endcapture %}
<div class="row">
    <div class="col-sm mt-4 mt-md-0">
        {{content | markdownify}}
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/stellarClass/star_form2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-4 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/stellarClass/star_form3.png" title="example image" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
            Grudić et al. (2021) 
        </div>
    </div>
</div>
