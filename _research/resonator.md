---
layout: "research-project"
title: "One-port acoustic resonators"
description: "Imaging acoustic leakage and higher-order modes in gigahertz resonators, and designing and fabricating an AlN-on-silicon resonator."
permalink: "/research/one-port-acoustic-resonators/"
area: "experimental"
order: 2
image_placeholder: false
img: "/assets/img/research/resonator.png"
image_alt: "Optical image of a fabricated AlN-on-silicon one-port resonator with a central IDT, reflector gratings and contact pads"
methods: "TMIM · Device design · Fabrication"
caption: "Optical image of the fabricated AlN-on-silicon one-port resonator."
---

This project has two parts that involve different devices. First, I imaged an existing X-cut LiNbO₃-on-SiC resonator, in collaboration with Prof. Ruochen Lu. Second, I designed and fabricated my own AlN-on-silicon resonator.

## Imaging leakage in a gigahertz resonator

{% include figure.liquid path="assets/img/research/saw/resonator-leakage.jpg" class="img-fluid rounded" zoomable=true alt="Measured and simulated Y11 spectrum of a one-port resonator, with TMIM maps inside and outside the acoustic resonator near 1.03 GHz and 1.13 GHz" caption="Y₁₁ spectrum (experiment vs. simulation) and TMIM maps inside and outside the acoustic resonator (AR) near 1.03 GHz (±1 V scale) and 1.13 GHz (±0.1 V scale)." %}

A resonator's performance is limited by the energy that escapes it. An electrical spectrum (Y₁₁) shows *that* there are losses and spurious modes, but not *where* the energy goes.

Using TMIM on a one-port X-cut LiNbO₃-on-SiC resonator, I imaged the acoustic field both inside the resonator and just outside its reflectors. I did this at frequencies around the main resonance (about 1.03 GHz) and around the higher-frequency features (about 1.13 GHz) in the spectrum. This gives a direct, real-space picture of leakage.

{% comment %}TODO (verify): describe in one sentence what the inside/outside maps show at each frequency, and where leakage is visible.{% endcomment %}
The inside and outside maps use different color scales (±1 V and ±0.1 V), so their contrast should not be read as a calibrated leakage ratio.

{% include figure.liquid path="assets/img/research/saw/noise-floor.png" class="img-fluid rounded d-block mx-auto" zoomable=true max-width="24rem" alt="TMIM MOD signal versus input power, and line scans near the noise floor" caption="Noise floor: TMIM MOD signal vs. input power down to about −87 dBm, with line scans near the noise floor." %}

Before interpreting weak signals outside the device, I characterized the noise floor of the measurement by sweeping the input power down to about −87 dBm.

## Higher-order modes inside the resonator

{% comment %}TODO (verify): the mode order and what the ray schematic shows.{% endcomment %}
{% include figure.liquid path="assets/img/research/saw/higher-order-modes.jpg" class="img-fluid rounded" zoomable=true alt="TMIM CH1 and CH2 maps across the resonator aperture, a simulated mode profile and a ray schematic" caption="TMIM CH1/CH2 maps across the resonator aperture (red box on the optical image), compared with a simulated mode profile." %}

Inside the resonator cavity, the TMIM maps show field variation *across* the aperture, not only along the propagation direction. This is the fingerprint of **transverse higher-order modes**, a common source of spurious responses in SAW resonators. Comparing the measured CH1/CH2 patterns with the simulated mode shape identifies which mode is excited.

## Designing an AlN-on-silicon resonator

{% include figure.liquid path="assets/img/research/saw/aln-resonator-design.png" class="img-fluid rounded" zoomable=true alt="AlN-on-silicon device stack, CAD mask, simulated dispersion and simulated admittance spectrum" caption="AlN-on-silicon resonator design: device stack, CAD mask, simulated dispersion, and simulated admittance with a resonance near 1 GHz for λ = 3.6 µm." %}

I then designed my own one-port resonator on a 200 nm AlN film on silicon. Using COMSOL, I simulated the dispersion of the guided acoustic mode to choose the IDT period. A wavelength of 3.6 µm places the resonance near 1 GHz in the simulated admittance spectrum. From the simulation I drew the CAD mask: a central IDT flanked by reflector gratings.

## Fabrication

{% include figure.liquid path="assets/img/research/saw/aln-resonator-fabrication.jpg" class="img-fluid rounded" zoomable=true alt="Fabrication steps for the AlN-on-silicon resonator and an optical image of the finished device" caption="Fabrication steps and an optical image of the finished AlN-on-silicon resonator." %}

I fabricated the device using:

1. **Electron-beam lithography** on PMMA resist.
2. **Deposition of 10 nm Cr / 100 nm Au**, followed by lift-off.

The optical image shows the finished resonator: a central IDT, flanking reflectors, and contact pads.

<div class="research-project-status">
  <p><strong>Project status — August 2024</strong></p>
  <p>Leakage and higher-order modes were imaged in the LiNbO₃ resonator, and the AlN-on-silicon resonator was designed and fabricated. Next steps were electrical characterization of the AlN device, remeasuring the sample, and preparing a standard sample for low-temperature measurements.</p>
</div>

<!-- Content evidence: qualification slides 20–24 and 46 (August 2024). -->
