---
layout: "research-project"
title: "Inverse-designed acoustic splitters"
description: "Designing acoustic scattering patterns and translating simulated geometries into multilayer fabrication masks."
permalink: "/research/inverse-designed-acoustic-splitters/"
area: "experimental"
order: 3
image_placeholder: false
img: "/assets/img/research/splitter-simulation.png"
image_alt: "Simulated acoustic field passing through a scattering region"
methods: "Inverse design · MATLAB–COMSOL"
caption: "Simulated acoustic field for a scattering pattern, from slide 27 of my August 2024 qualification presentation."
---

## Inverse design in photonics

{% comment %}TODO (verify): the titles and authors of the two Nat. Photonics papers. 9, 374 is most likely Piggott et al. (wavelength demultiplexer). 9, 378 is Shen et al., a polarization beamsplitter, but the slide labels that panel "Mode demultiplexer"; check which paper the mode-demultiplexer images come from.{% endcomment %}
{% include figure.liquid path="assets/img/research/saw/photonic-inverse-design.jpg" class="img-fluid rounded" zoomable=true alt="Inverse-designed integrated photonic devices with irregular, non-intuitive patterns" caption="Inverse-designed integrated photonic devices. From Nat. Photonics 9, 374 (2015) and Nat. Photonics 9, 378 (2015)." %}

In conventional design, a designer picks a structure and simulates what it does. **Inverse design** reverses the process: you specify what the device should do, and an algorithm searches for a structure that does it. In integrated photonics, this approach has produced ultra-compact wavelength and mode demultiplexers with irregular, non-intuitive patterns that a person would be unlikely to draw.

## An inverse-designed acoustic power splitter

{% include figure.liquid path="assets/img/research/saw/splitter-concept.png" class="img-fluid rounded" zoomable=true alt="Simulated acoustic field through a random scattering pattern with one input and two outputs, the circular scattering unit, and the 20 by 20 design region in 200 nm AlN" caption="The splitter concept: a 20 × 20 design region of scattering units (holes of diameter d in cells of size a) in 200 nm AlN, between a 1 µm input waveguide and two outputs." %}

I asked whether the same idea works for gigahertz acoustic waves: can a patterned scattering region split acoustic power between two outputs in a chosen ratio? The design region is a 20 × 20 grid of scattering units in a 200 nm AlN film. Each unit is either a hole or no hole, and the hole diameter d and cell size a are additional parameters. An input waveguide feeds the region, and two output waveguides collect the power.

{% comment %}TODO (verify): the MATLAB–COMSOL workflow claim comes from the earlier site text, not the slides.{% endcomment %}
I built the design workflow in MATLAB and COMSOL: MATLAB coordinates the design loop, and COMSOL models the acoustic response of each candidate geometry.

{% include figure.liquid path="assets/img/research/saw/splitter-comsol-setup.jpg" class="img-fluid rounded" zoomable=true alt="COMSOL setup showing the port excitation, the perfectly matched layer selection and the refined mesh in the scattering region" caption="COMSOL setup: port excitation (0.01 W, A0 mode at 1 GHz), perfectly matched layers (PMLs) at the outputs, and a finer mesh with 3–4 boundary layers in the scattering region." %}

In a first round, I simulated candidate patterns with an A0-mode input at 1 GHz and 10 mW, with PMLs absorbing the power at each output. I measured the power reaching each output against a target split ratio of 9 : 1.

## First-round results

{% include figure.liquid path="assets/img/research/saw/splitter-results.jpg" class="img-fluid rounded" zoomable=true alt="Simulated displacement fields for four scattering patterns, with the power at each output and S11" caption="Simulated displacement magnitude for four scattering patterns, with the power absorbed at each output PML and S11." %}

<div class="research-results-table" role="region" aria-label="Simulated acoustic splitter output powers" tabindex="0">
  <table>
    <caption>Simulation results from qualification slide 28 (August 2024). Input: 10 mW; target output ratio: 9 : 1. Ratios are calculated from the rounded powers.</caption>
    <thead>
      <tr><th scope="col">Case</th><th scope="col">a (nm)</th><th scope="col">d (nm)</th><th scope="col">Output 1 (mW)</th><th scope="col">Output 2 (mW)</th><th scope="col">Ratio</th><th scope="col">S11</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">1</th><td>150</td><td>120</td><td>4.3</td><td>1.0</td><td>4.3 : 1</td><td>0.093</td></tr>
      <tr><th scope="row">2</th><td>250</td><td>220</td><td>5.7</td><td>1.0</td><td>5.7 : 1</td><td>0.014</td></tr>
      <tr><th scope="row">3</th><td>400</td><td>320</td><td>4.9</td><td>0.9</td><td>5.4 : 1</td><td>0.0385</td></tr>
      <tr><th scope="row">4</th><td>400</td><td>320</td><td>6.4</td><td>1.1</td><td>5.8 : 1</td><td>0.0852</td></tr>
    </tbody>
  </table>
</div>

{% comment %}TODO (verify): that cases 3 and 4 are two different random patterns with the same a and d.{% endcomment %}
Cases 3 and 4 use the same a and d with different hole patterns. None of these first-round patterns reached the 9 : 1 target; the best gave about 5.8 : 1. The summed output power was also well below the 10 mW input, so a real optimizer needs to target both the ratio *and* the transmission. This round established the simulation pipeline and the parameter ranges for a proper optimization loop.

## Device layout for fabrication

{% include figure.liquid path="assets/img/research/saw/splitter-mask.png" class="img-fluid rounded" zoomable=true alt="Full mask layout with IDTs in etching windows, tapered couplers and the scattering unit, with a zoom on the metalized or etched holes" caption="Full mask layout: IDTs in etching windows, tapered couplers, and the scattering unit, with a zoom on the metalized/etched holes." %}

To test a design experimentally, the simulated scattering region must be embedded in a complete device. The full layout includes:

- IDTs inside etching windows to launch and detect the wave;
- tapered couplers to funnel it into the 1 µm waveguide;
- the scattering region itself, realized either as etched or as metalized holes.

{% comment %}TODO (verify): the Python mask-automation claim comes from the earlier site text, not the slides.{% endcomment %}
I wrote Python tools to convert the design geometry into multilayer CAD masks automatically, so a new candidate pattern can go straight from simulation to fabrication layout.

<div class="research-project-status">
  <p><strong>Project status — August 2024</strong></p>
  <p>The simulation pipeline and the fabrication layout were in place. Next steps were device fabrication, reducing computation time so that a full optimization loop is practical, and testing the splitter with electrical and TMIM measurements. All results above are simulations, not measurements of a completed splitter.</p>
</div>

<!-- Content evidence: qualification slides 26–30 and 47 (August 2024). -->
