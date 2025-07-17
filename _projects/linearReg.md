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

* Revenue growth [\%]: A numerical variable describing the increase in a company's income generated.
* Gross profit [\$]: A numerical variable describing the amount a company makes after deducing the direct cost associated with producing its goods from revenue. 
* R\&D expense [\$]: A numerical variable describing the costs a company incurs in its research and development activities. 
* SG\&A expense [\$]: A numerical variable describing the cost a company incurs in its selling, general, and administrative expenses. 
* Total asset [\$]: A numerical variable describing the total value of everything the company owns that can provide future economic benefits. 
* Sectors: A categorical variable stating which sector the company at the stock market. 

    |Sectors|Tech | HC | IND | BaM |  CC | CSP | Ene |  CD |  FS | Total|
    |:-     | :-: | :-:| :-: | :-: | :-: | :-: | :-: | :-: | :-: |  -:  |
    | Count | 177 | 138|  37 | 24  | 20  |  7  |  6  |  4  |  3  |  416 |

* 5Y dividend per share: A categorical varaibel stating whether the company has increased 5Y dividend per share.

    |5 year dividend per share|  Increase | Decreased |  Total |
    | :---------------------: | :-------: | :-------: | :----: |
    |          Count          |     30    |    386    |   416  |

The response varaible we wish to predict is
* 2019 Price Variance [\%]: A numerical variable representing the percentage change of stock market price during 2018-2019 with respect to the price in 2018.

### Descriptive Analysis
We start the descriptive analysis p


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
