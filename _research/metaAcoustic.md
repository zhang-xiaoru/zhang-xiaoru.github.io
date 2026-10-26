---
layout: "research-project"
title: "Topological acoustic devices"
description: "Investigating gigahertz acoustic propagation in patterned phononic structures using spatially resolved measurements."
permalink: "/research/topological-acoustic-devices/"
area: "experimental"
order: 1
image_placeholder: false
img: "/assets/img/research/phononic-crystal.jpeg"
image_alt: "SEM image of a snowflake phononic crystal"
methods: "Acoustic imaging · Phononic crystals"
caption: "SEM image from slide 12 of my August 2024 qualification presentation."
---

## Quantum spin Hall effect in acoustic systems

{% include figure.liquid path="assets/img/research/saw/qsh-concept.png" class="img-fluid rounded" zoomable=true alt="Band inversion, double Dirac cone and pseudospin modes of an acoustic topological insulator, with one-way transport simulations and transmission spectra" caption="Band inversion, acoustic pseudospin, and spin-dependent one-way transport in an acoustic topological insulator. Adapted from Nat. Phys. 12, 1124 (2016)." %}

In the electronic quantum spin Hall (QSH) effect, spin–orbit coupling inverts the bulk bands. At the boundary to an ordinary insulator, this creates edge states in which the electron's spin is locked to its direction of travel.

Sound has no spin, but a lattice can be engineered to have one. In a hexagonal crystal, two degenerate pairs of modes form a "double Dirac cone" and act as an acoustic **pseudospin**. Shrinking or expanding the unit-cell features opens a band gap with either ordinary ("trivial") or inverted ("non-trivial") band order. Along an interface between the two, pseudospin-dependent edge states carry sound one way, and they are expected to be robust against bends and certain defects.

## Imaging nanoscale acoustic metamaterials

{% include figure.liquid path="assets/img/research/saw/valley-hall-klein.jpg" class="img-fluid rounded d-block mx-auto" zoomable=true max-width="40rem" alt="TMIM images of the acoustic valley Hall effect and of acoustic Klein tunneling in snowflake phononic crystals" caption="TMIM imaging of the acoustic valley Hall effect (Nat. Electron. 5, 257 (2022)) and acoustic Klein tunneling (Device, 100474 (2024)) in snowflake phononic crystals." %}

These ideas can be realized on chip. Snowflake-shaped phononic crystals etched into aluminum nitride (AlN) have a lattice constant of about 10 µm, so their band gaps sit near 1 GHz. This is the range TMIM can image.

In collaboration with Prof. A. T. Charlie Johnson's group, we used TMIM to directly image the acoustic valley Hall effect (*Nat. Electron.* 2022) and acoustic **Klein tunneling** (*Device* 2024): perfect transmission of a Dirac-like acoustic wave through a potential barrier.

{% comment %}TODO (fill in): describe your contribution to the Klein tunneling study, e.g. "My contribution was …, and I am a co-author on the resulting publication." Link the paper if you are a co-author.{% endcomment %}

## Acoustic quantum spin Hall at gigahertz frequencies

{% comment %}TODO (verify): whether the design, simulation and fabrication were yours or shared within the group; phrase as "I" or "we" accordingly.{% endcomment %}
{% include figure.liquid path="assets/img/research/saw/qsh-device.png" class="img-fluid rounded" zoomable=true alt="Inverse-snowflake lattice, simulated trivial and non-trivial band structures, simulated edge transport and SEM image of the fabricated lattice" caption="Inverse-snowflake lattice in AlN: the unit cell, simulated trivial and non-trivial bands as r₁/a₀ is tuned, simulated edge transport along the interface, and an SEM image of the fabricated lattice." %}

To build an acoustic QSH device at gigahertz frequencies, I used an **inverse snowflake** lattice: snowflake-shaped holes in an AlN film. Changing the size of the snowflake relative to the lattice constant (r₁/a₀) moves the lattice from the trivial phase to the non-trivial, band-inverted phase. Placing the two phases side by side creates an interface. In simulation, a wave injected at the interface stays confined to it.

## Imaging the band gap and pseudospin transport

{% include figure.liquid path="assets/img/research/saw/bandgap-imaging.png" class="img-fluid rounded" zoomable=true alt="Simulated band structures of the non-trivial and trivial lattices with TMIM channel-1 and amplitude maps at 1.05, 1.07 and 1.10 GHz" caption="TMIM channel-1 (CH1) and amplitude (MOD) maps at 1.05, 1.07, and 1.10 GHz, shown against the simulated bands of the non-trivial (left) and trivial (right) lattices." %}

{% comment %}TODO (verify): state plainly which frequency shows interface confinement and which show bulk propagation, without claiming more than the maps support.{% endcomment %}
TMIM lets us check the topology directly in real space. I imaged the device at frequencies chosen relative to the simulated band gap (1.05, 1.07, and 1.10 GHz). At each frequency I compared where the acoustic signal lives: spread through the bulk of the lattice, or concentrated along the trivial/non-trivial interface.

{% include figure.liquid path="assets/img/research/saw/pseudospin-tmim.jpg" class="img-fluid rounded" zoomable=true alt="TMIM channel-1 and amplitude maps along the trivial/non-trivial interface, with red boxes marking a periodic field pattern" caption="TMIM channel-1 (left) and amplitude (right) maps along the trivial/non-trivial interface. Red boxes mark the periodic field pattern along the boundary." %}

Zooming in on the interface, the CH1 map shows a periodic field pattern along the boundary. This is the signature expected from pseudospin-polarized edge transport, and it can be compared directly with theoretical field patterns of elastic pseudospin states.

**Why this matters:** waveguides that are topologically protected could route gigahertz acoustic signals around sharp corners with low backscattering. That is a building block for compact phononic circuits in RF signal processing and quantum acoustics.

## Possible application: a gigahertz topological ring resonator

{% include figure.liquid path="assets/img/research/saw/ring-resonator-sim.jpg" class="img-fluid rounded d-block mx-auto" zoomable=true max-width="36rem" alt="Simulated acoustic field of a topological ring resonator in a phononic crystal, excited by a transducer on the left" caption="Simulation of a gigahertz topological ring resonator in a phononic crystal." %}

One application of these edge states is a **topological ring resonator**. Closing the trivial/non-trivial interface into a loop gives a ring in which the edge mode circulates. Because the edge mode can turn sharp corners with little backscattering, the ring does not have to be a smooth circle; it can follow the lattice. A ring of this kind has been demonstrated for elastic waves at kHz frequencies (*Nat. Commun.* 9, 3072 (2018)). My simulation shows the same concept in a nanoscale phononic crystal operating at gigahertz frequencies. That makes it a candidate building block for compact on-chip acoustic filters and delay lines.

<div class="research-project-status">
  <p><strong>Project status — August 2024</strong></p>
  <p>Fabricated inverse-snowflake QSH devices were imaged with TMIM at gigahertz frequencies. A gigahertz topological ring resonator was explored in simulation as a possible application.</p>
</div>

<!-- Content evidence: qualification slides 10–14 and 18 (August 2024). -->
