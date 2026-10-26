---
layout: "research-project"
title: "Surface acoustic waves and nanoscale imaging"
description: "Background on SAW devices, their nanofabrication, and imaging GHz acoustic waves with microwave impedance microscopy."
permalink: "/research/saw-background/"
area: "experimental"
card: false
methods: "Background · Fabrication · TMIM"
---

This page gives the background for my work on nanoscale surface acoustic wave devices: what these waves are, how they are generated and fabricated on chip, and how we image them.

## What is a surface acoustic wave?

{% include figure.liquid path="assets/img/research/saw/saw-modes.png" class="img-fluid rounded" zoomable=true alt="Bulk and surface acoustic waves, and the Rayleigh, Love and Lamb wave modes" caption="Bulk versus surface acoustic waves, and common surface-guided modes. Adapted from J. Micromech. Microeng. 31, 054003 (2021)." %}

Mechanical vibrations in a solid travel as elastic waves: strain and stress coupled through the material's elasticity. In the bulk, these waves fill the whole volume. At a free surface, the boundary conditions allow a different class of solutions: **surface acoustic waves** (SAWs), whose energy is confined within roughly one wavelength of the surface.

Depending on the stack and polarization, several surface-guided modes exist:

- **Rayleigh waves**, with elliptical particle motion in the sagittal plane.
- **Love waves**, which are shear-horizontal waves guided by a slower surface layer.
- **Lamb waves**, which are plate modes in thin membranes.

In a piezoelectric material, each of these mechanical waves carries an electric potential with it. This coupling is what lets us launch, detect, and image them electrically.

## SAW in MEMS: interdigital transducers

{% comment %}TODO (verify): is the IDT photo your own device? If not, add its source to the caption.{% endcomment %}
{% include figure.liquid path="assets/img/research/saw/idt.png" class="img-fluid rounded d-block mx-auto" zoomable=true max-width="36rem" alt="Optical image of an interdigital transducer and a schematic of SAW generation" caption="An interdigital transducer (IDT) and a schematic of how it launches a surface acoustic wave." %}

The standard way to generate a SAW on chip is an **interdigital transducer (IDT)**: interleaved metal fingers patterned on a piezoelectric film. An RF voltage across the fingers creates a periodic strain through the piezoelectric effect. When the drive frequency matches the finger period (λ = 2d in the schematic), the strain adds up coherently into a propagating surface wave.

Because SAW velocities are only a few kilometers per second, a micrometer-scale wavelength corresponds to gigahertz frequencies. This makes SAW devices compact RF components: they are the filters in every mobile phone. They are also a platform for sensing, acoustofluidics, and quantum acoustics.

## Fabrication of nano-SAW devices

{% comment %}TODO (verify): were these process schematics drawn by you, or taken from a source?{% endcomment %}
{% include figure.liquid path="assets/img/research/saw/fabrication-flow.png" class="img-fluid rounded" zoomable=true alt="Device development loop and schematics of lithography, metal deposition and etching" caption="The device development loop, and the lithography, metal deposition, and etching steps used in nanofabrication." %}

Building a device is a loop: **simulation → CAD → fabrication → characterization**, with each measurement feeding back into the next design. On the fabrication side, I patterned features using:

- **Electron-beam lithography:** spin-coat resist, expose, and develop.
- **Metal deposition and lift-off** to form electrodes.
- **Etching** to transfer patterns into the piezoelectric layer. Physical sputtering, plasma etching, and reactive-ion etching differ in anisotropy and selectivity.

## Conventional characterization

{% comment %}TODO (verify): is the S21 plot your own measurement, and is the VNA photo a stock/manufacturer image that needs credit?{% endcomment %}
{% include figure.liquid path="assets/img/research/saw/vna-sparameter.png" class="img-fluid rounded" zoomable=true alt="A vector network analyzer and an S21 transmission spectrum of a SAW device" caption="A vector network analyzer and an S-parameter (S21) measurement of a SAW device." %}

The workhorse measurement is a **vector network analyzer (VNA)**. It records S-parameters, the reflection and transmission between ports, as a function of frequency. This is precise and fast, but it only sees the device from its electrical ports and does not reveal *where* the energy goes.

{% include figure.liquid path="assets/img/research/saw/optical-xray-imaging.jpg" class="img-fluid rounded d-block mx-auto" zoomable=true max-width="36rem" alt="Stroboscopic X-ray and laser interferometry images of surface acoustic waves" caption="Imaging SAWs with stroboscopic X-ray and laser interferometry. From IEEE Microwave Magazine 21, 60 (2020)." %}

Optical and X-ray methods, such as laser interferometry and stroboscopic X-ray imaging, can map the wave field. However, they are limited in spatial resolution, frequency range, or accessibility for nanoscale gigahertz devices.

## Transmission-mode microwave impedance microscopy

{% include figure.liquid path="assets/img/research/saw/tmim.png" class="img-fluid rounded" zoomable=true alt="Schematic of transmission-mode microwave impedance microscopy with channel 1 and channel 2 SAW images and line profiles" caption="Transmission-mode microwave impedance microscopy (TMIM): setup, demodulation, and channel 1 / channel 2 images of a propagating SAW. Adapted from Phys. Rev. Applied 9, 061002 (2018)." %}

**Transmission-mode microwave impedance microscopy (TMIM)** puts the detector on a scanning tip:

1. The IDT launches the acoustic wave.
2. A shielded cantilever probe picks up the oscillating piezoelectric potential at its position.
3. The signal is demodulated against the source reference, giving two channels proportional to cos(kx + φ) and sin(kx + φ). Together they give the local amplitude and phase of the wave.

TMIM works up to about 10 GHz, with roughly 100 nm spatial resolution and a displacement sensitivity of about 1 fm/√Hz. That is enough to image wavefronts, standing waves, and leakage directly inside a working device.

{% comment %}TODO (verify): wording and scope of this contribution sentence (taken from the earlier site text).{% endcomment %}
In my work, I built a microwave impedance microscopy setup and developed Python tools to align and stitch scans, which made it possible to map large device areas.

<!-- Content evidence: qualification slides 4–8 (August 2024). -->
